import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import {
    activeRoom,
    changeActiveRoom,
    setVisitFlag,
} from 'redux/slices/profileSlice'
import { startLoadingApp, stopLoadingApp } from 'redux/slices/commonSlice'
type RoomAvatarProps = {
    imgSrc: string
    title: string
    no: number
    onClose: Function
    user: any
}
const RoomAvatar = (props: RoomAvatarProps) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { profile } = useSelector((state: RootStateOrAny) => ({
        profile: state.profile.data,
    }))

    const [activeRoom, initActiveRoom] = useState(-1)

    useEffect(() => {
        if (profile) {
            profile.rooms.forEach((room, index) => {
                if (room.active == true) {
                    initActiveRoom(index)
                }
            })
        }
    }, [profile])

    const gotoRoom = () => {
        if (props.no != 2) {
            dispatch(setVisitFlag(0))
            router.push(`/${profile.username}/roomview?no=${props.no}`)
            props.onClose()
        }
    }

    const setActiveRoom = (roomNo) => {
        dispatch(startLoadingApp())
        dispatch(
            changeActiveRoom({
                roomNo,
                finalFunction: () => {
                    dispatch(stopLoadingApp())
                },
            })
        )
    }

    return (
        <div className="transition duration-500 flex flex-col relative gap-[8px] w-full p-[8px] border-[1.5px] border-[#272829] hover:border-primary rounded-[20px] cursor-pointer">
            {props.user && props.user.username == profile.username && (
                <div>
                    <div
                        className="absolute top-[20px] right-[50px] flex justify-center items-center w-[24px] h-[24px] p-[2px] rounded-[20px] bg-[rgba(12,12,14,0.5)]
                                    z-[1001] transition duration-500 border-[1px] border-transparent hover:border-primary text-white"
                        onClick={() => setActiveRoom(props.no)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill={
                                activeRoom != -1 &&
                                profile.rooms[activeRoom].roomNo == props.no
                                    ? `currentColor`
                                    : 'none'
                            }
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                        </svg>
                    </div>
                    <div
                        className="absolute top-[20px] right-[20px] flex justify-center items-center w-[24px] h-[24px] rounded-[24px] bg-[rgba(12,12,14,0.5)]
                                    z-[1001] transition duration-500 border-[1px] border-transparent hover:border-primary"
                        onClick={gotoRoom}
                    >
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.73903 2.14251L1.94856 7.02853C1.76768 7.21407 1.59263 7.57954 1.55762 7.83256L1.34173 9.65427C1.26587 10.3121 1.75601 10.7619 2.43286 10.6495L4.3117 10.3402C4.57427 10.2952 4.94187 10.1097 5.12276 9.91853L9.91323 5.03251C10.7418 4.18913 11.1152 3.22767 9.8257 2.05255C8.54202 0.888675 7.56759 1.29912 6.73903 2.14251Z"
                                stroke="#F3F3F3"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6 3.33337C6.2104 4.7625 7.30642 5.85506 8.66667 6.00004"
                                stroke="#F3F3F3"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            )}
            <Image
                src={props.imgSrc}
                className="rounded-xl"
                layout="responsive"
                width={300}
                height={140}
            />
            <div className="w-full mx-[12px] font-500 text-[14px] leading-[150%] text-[#f3f3f3]">
                {props.title}
            </div>
            <div className="w-full mx-[12px] mb-[6px] font-500 text-[14px] leading-[150%] text-[#f3f3f3]">
                #{props.no}
            </div>
        </div>
    )
}

export default RoomAvatar
