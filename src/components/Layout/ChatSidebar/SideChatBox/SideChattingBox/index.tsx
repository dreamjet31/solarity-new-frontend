import React, { useEffect, useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import useWindowDimensions from 'components/Common/useWindowDimensions'
import { ChattingBoxData } from 'data/Experience'
import { clearUserMsg, setMsg, setUserMsg } from 'redux/slices/chatSlice'
import { apiCaller } from 'utils/fetcher'
import ChattingThread from '../../../../Experience/RoomInterior/ChattingBox/ChattingThread'
import TypingNotification from '../../../../Experience/RoomInterior/ChattingBox/TypingNotification'
import CONSTANT from 'config/constant'

const appendMyNewChattingThread = (msgs, setMsgs, props) => {
    setMsgs([
        ...msgs,
        <ChattingThread
            imgUrl="/images/experience/room_user_avatars/room_user_avatar_15.webp"
            uName="You"
            text={props.newMsgDataState.myMsg}
            before="1m"
            hisMsg={props.newMsgDataState.reply.hisMsg}
            replyToWhom={props.newMsgDataState.reply.replyToWhom}
            fileUrls={props.newMsgDataState.files.fileUrls}
            fileNames={props.newMsgDataState.files.fileNames}
        />,
    ])
    props.setNewMsgSendingState(false)
    props.setNewMsgDataState({
        reply: {
            replying: false,
            replyToWhom: '',
            hisMsg: '',
        },
        myMsg: '',
        files: {
            fileExists: false,
            fileNames: [],
            fileUrls: [],
        },
    })
}

type SideChattingBoxType = {
    isSocial: boolean
}

const SideChattingBox = (props: SideChattingBoxType) => {
    const dispatch = useDispatch()
    const { msgs, chatLogs, members, chatKind } = useSelector(
        (state: RootStateOrAny) => ({
            msgs: state.chat.msgs,
            chatLogs: state.chat.chatLogs,
            members: state.chat.members,
            chatKind: state.chat.chatKind,
        })
    )

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                dispatch(clearUserMsg({}))
                const { data } = await apiCaller.post('/chats/fetchMessages', {
                    members,
                    chatKind,
                })
                if (
                    chatKind == CONSTANT.GLOBAL_CHAT ||
                    chatKind == CONSTANT.YGG_CHAT
                ) {
                    for (var i = 0; i < data.chat.length; i++) {
                        await dispatch(
                            setUserMsg({
                                groupType: data.chat[i].groupType,
                                daoId: null,
                                members: data.chat[i].members,
                                sender: {
                                    name: data.chat[i].sender.name,
                                    profileImage: data.chat[i].sender
                                        .profileImage
                                        ? data.chat[i].sender.profileImage
                                        : '/images/experience/psuedo_avatars/avatar.png',
                                },
                                content: data.chat[i].content,
                                reply: data.chat[i].reply,
                                attachments: data.chat[i].attachments,
                                date: data.chat[i].date,
                                editState: data.chat[i].editState,
                                deleteState: data.chat[i].deleteState,
                                msgId: data.chat[i].msgId,
                            })
                        )
                    }
                } else if (chatKind == CONSTANT.GROUP_CHAT) {
                } else {
                    for (var i = 0; i < data.chat.msgs.length; i++) {
                        await dispatch(
                            setUserMsg({
                                groupType: data.chat.type,
                                daoId: null,
                                members: data.chat.users,
                                sender: {
                                    name: data.chat.msgs[i].sender.username,
                                    profileImage: data.chat.msgs[i].sender
                                        .profileImage
                                        ? data.chat.msgs[i].sender.profileImage
                                              .link
                                        : '/images/experience/psuedo_avatars/avatar.png',
                                },
                                content: data.chat.msgs[i].content,
                                reply: data.chat.msgs[i].reply,
                                attachments: data.chat.msgs[i].attachments,
                                date: data.chat.msgs[i].createdAt,
                                editState: data.chat.msgs[i].editState,
                                deleteState: data.chat.msgs[i].deleteState,
                                msgId: data.chat.msgs[i]._id,
                            })
                        )
                    }
                }
            } catch (error) {
                console.error('Something went wrong.')
            }
        }
        fetchMessages()
    }, [members])

    useEffect(() => {
        setTimeout(() => {
            let box = document.getElementById('chatting_thread_box_1')
            if (box) {
                let height = box.scrollHeight + 113
                box.scroll({ top: height, behavior: 'smooth' })
            }
        }, 100)
    }, [chatLogs, msgs])

    return (
        <div
            className={`flex xs:h-[calc(100vh-280px)] sm:h-[calc(100vh-280px)] gap-[24px] relative mb-[24px] rounded-2xl`}
            id="chatting_thread_box"
        >
            <div
                className="flex flex-col px-[26px] w-full h-full overflow-y-scroll overflow-x-visible gap-[4px] relative pb-[30px]"
                id="chatting_thread_box_1"
            >
                {props.isSocial &&
                    chatLogs.map((chatLog, index) => (
                        <ChattingThread
                            imgUrl={
                                !!chatLog.sender.profileImage
                                    ? chatLog.sender.profileImage
                                    : '/images/experience/psuedo_avatars/avatar.png'
                            }
                            uName={chatLog.sender.name}
                            text={chatLog.content}
                            date={chatLog.date}
                            hisMsg={
                                !!chatLog.reply.hisMsg
                                    ? chatLog.reply.hisMsg
                                    : ''
                            }
                            replyToWhom={chatLog.reply.replyToWhom}
                            attachments={chatLog.attachments}
                            msgId={chatLog.msgId}
                            fileNames={['__FOR__INITIAL__DATA__']}
                            key={index}
                        />
                    ))}
                {!props.isSocial &&
                    msgs.map((msg, index) => (
                        <ChattingThread
                            imgUrl={
                                !!msg.avatarUrl
                                    ? msg.avatarUrl
                                    : '/images/experience/psuedo_avatars/avatar.png'
                            }
                            uName={msg.user}
                            text={msg.msg.myMsg}
                            date={''}
                            hisMsg={
                                !!msg.msg.reply.hisMsg
                                    ? msg.msg.reply.hisMsg
                                    : ''
                            }
                            replyToWhom={msg.msg.reply.replyToWhom}
                            msgId={msg.msg._id}
                            attachments={[]}
                            fileNames={['__FOR__INITIAL__DATA__']}
                            key={index}
                        />
                    ))}
            </div>
        </div>
    )
}

export default SideChattingBox
