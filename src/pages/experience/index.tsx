import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'

import Experience from 'modules/Experience'
import ExperienceBanner from 'modules/Experience/ExperienceBanner'
import Layout from 'components/Layout'
import LiveRoomList from 'components/Experience/LiveRoom/LiveRoomList'
import CreateRoomModal from 'components/Experience/Common/CreateRoomModal'
import JoinRoomModal from 'components/Experience/Common/JoinRoomModal'
import MobileExperienceBanner from 'components/Experience/LiveRoom/MobileExperienceBanner'
import {
    addMsg,
    addPeer,
    removePeer,
    setMsg,
    setName,
    setRooms,
} from 'redux/slices/chatSlice'
import ACTIONS from 'config/actions'
import { checkBrowser } from 'utils'
import RoomInfoDlg from 'components/Experience/RoomInfoDlg'

const ProfileIndex = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const [sidebarToggler, setSidebarToggler] = useState(false)
    const [activeRoom, setActiveRoom] = useState('room_1')
    const [roomSettingDlgToggle, setRoomSettingDlgToggle] = useState([
        false,
        'join',
    ])
    const [activeRoomId, setActiveRoomId] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const [selectedLiveRoom, setSelectedLiveRoom] = useState<any>({})

    const {
        selectedRoom,
        createModalVisibility,
        joinModalVisibility,
        chatSidebarVisibility,
        selectedIndex,
        rooms,
    } = useSelector((state: RootStateOrAny) => ({
        selectedRoom: state.chat.selectedRoom,
        createModalVisibility: state.chat.createModalVisibility,
        joinModalVisibility: state.chat.joinModalVisibility,
        chatSidebarVisibility: state.chat.chatSidebarVisibility,
        selectedIndex: state.chat.selectedIndex,
        rooms: state.chat.rooms,
    }))

    useEffect(() => {
        document
            .getElementsByTagName('html')[0]
            .classList.remove('a-fullscreen')
        if (selectedIndex != -1 && rooms[selectedIndex]) {
            setSelectedLiveRoom(rooms[selectedIndex])
        }
    }, [rooms, selectedIndex])

    useEffect(() => {
        // When a user click f5 key, it helps to forget a user's name.
        if (localStorage.getItem('name')) {
            dispatch(setName(localStorage.getItem('name')))
        }
        initSocket()
        setIsMobile(checkBrowser())
    }, [])

    const initSocket = () => {
        // This part is main for socket.
        if (!(window as any).socket) {
            setTimeout(() => {
                initSocket()
            }, 5)
            return
        }

        if (!(window as any).listen) {
            ;(window as any).socket.on(ACTIONS.ADD_PEER, (data: any) => {
                dispatch(addPeer(data))
            })
            ;(window as any).socket.on(ACTIONS.SEND_MSG, (data: any) => {
                dispatch(addMsg(data))
            })
            ;(window as any).socket.on(ACTIONS.REMOVE_PEER, (data: any) => {
                dispatch(removePeer(data))
            })
            ;(window as any).socket.on(ACTIONS.ROOM_LIST, (data: any) => {
                dispatch(setRooms(data.rooms))
            })
            ;(window as any).socket.on(ACTIONS.CREATE_ROOM, (data: any) => {
                dispatch(setMsg(data.msgs))
            })
            ;(window as any).socket.on(ACTIONS.ROOM_READY, (data: any) => {
                ;(window as any).socket.emit(ACTIONS.ROOM_LIST, {})
                if (data.type == false && data.roomNo == 0) {
                    router.push(
                        `/experience/room?rid=${data.roomId}&roomType=0&no=0`
                    )
                } else if (data.type == false && data.roomNo == 1) {
                    router.push(
                        `/experience/room?rid=${data.roomId}&roomType=1&no=0`
                    )
                } else if (data.type == false && data.roomNo == 2) {
                    router.push(
                        `/experience/room?rid=${data.roomId}&roomType=2&no=0`
                    )
                } else if (data.type == true) {
                    router.push(
                        `/experience/room?rid=${data.roomId}&roomType=3&no=${
                            data.roomNo + 1
                        }`
                    )
                }
            })
            ;(window as any).socket.emit(ACTIONS.DUPLICATION_INVITATION, () => {
                alert('This user is already invited.')
            })
            ;(window as any).listen = true
        }
    }

    const createRoomModal = () => {
        if (selectedRoom && selectedRoom.no != -1) {
            setRoomSettingDlgToggle([true, 'create'])
        } else {
            alert('Please select a room to create')
        }
    }

    return (
        <Layout
            sidebarToggler={sidebarToggler}
            banner={
                <div
                    className={`grid md:flex-row-reverse ${
                        chatSidebarVisibility
                            ? 'lg:grid-cols-1 xl:grid-cols-9 2xl:grid-cols-5 xs:gap-8'
                            : 'lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-5 xs:gap-8'
                    }`}
                >
                    <div
                        className={`min-w-[265px] ${
                            chatSidebarVisibility
                                ? 'col-span-1 lg:col-span-1 xl:col-span-3 2xl:col-span-1'
                                : 'col-span-1 lg:col-span-3 xl:col-span-3 2xl:col-span-1'
                        }`}
                    >
                        <div className="lg:hidden block mb-4">
                            {!!selectedLiveRoom.title && (
                                <RoomInfoDlg
                                    selectedLiveRoom={selectedLiveRoom}
                                    type={1}
                                />
                            )}
                        </div>
                        <div className={` flex flex-col h-full `}>
                            <LiveRoomList />
                        </div>
                    </div>
                    <div
                        className={`${
                            chatSidebarVisibility
                                ? 'col-span-1 lg:col-span-1 xl:col-span-6 2xl:col-span-4'
                                : 'col-span-1 lg:col-span-5 xl:col-span-6 2xl:col-span-4'
                        }`}
                    >
                        {isMobile ? (
                            <MobileExperienceBanner />
                        ) : (
                            <ExperienceBanner
                                selectedLiveRoom={selectedLiveRoom}
                            />
                        )}
                    </div>
                </div>
            }
            onClick={() => setSidebarToggler(!sidebarToggler)}
        >
            {/* Main part */}
            <Experience
                sidebarToggler={sidebarToggler}
                activeRoom={activeRoom}
                roomSelect={(arg) => setActiveRoom(arg)}
                setActiveRoomId={(i) => setActiveRoomId(i)}
                activeRoomId={activeRoomId}
                roomSettingDlgToggle={roomSettingDlgToggle}
                setRoomSettingDlgToggle={() =>
                    setRoomSettingDlgToggle([true, 'create'])
                }
            />

            {/* Modals */}
            {createModalVisibility && <CreateRoomModal />}
            {joinModalVisibility && <JoinRoomModal />}
        </Layout>
    )
}

export default ProfileIndex
