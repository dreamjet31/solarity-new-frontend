import React from 'react'
import Image from 'next/image'
import { CalendarDays, Trophy } from 'components/icons'
import DummyAvatarSmall4Experience from 'components/Experience/RoomInfoDlg/DummyAvatarSmall4Experience'
import MoreUsersAvatar from 'components/Experience/RoomInfoDlg/MoreUsersAvatar'
import { UsersBoxData } from 'data/Experience'
import RoomMemberAvatarSmall from 'components/Experience/RoomInfoDlg/RoomMemberAvatarSmall'

type LobbyType = {
    title: string
    startDate: string
    reward: number
    unit: string
    avatar: string
    mainMember: string
    backgroundImage: string
}

const DaoEventPanel = (props: LobbyType) => {
    var rest = 0
    return (
        <div className="bg-[#181818] rounded-[10px] mt-4">
            <div className="relative sm:w-[385px] w-[360px] h-[110px]">
                <Image
                    src={props.backgroundImage}
                    className="rounded-[10px]"
                    layout="responsive"
                    width={385}
                    height={110}
                />
                <div className="absolute bottom-2 left-4 text-[13px] text-white right-4 flex items-center justify-between">
                    <div>
                        <div className="w-[25px] h-[25px] mr-2">
                            <Image
                                src={props.avatar}
                                className="rounded-full"
                                layout="responsive"
                                width={25}
                                height={25}
                            />
                        </div>
                        {props.mainMember}
                    </div>

                    <div className="flex ml-4">
                        {UsersBoxData.map(function (avatar, index) {
                            rest = index - 4
                            return index >= 5 ? (
                                false
                            ) : avatar.imgUrl === '' ? (
                                <DummyAvatarSmall4Experience key={index} />
                            ) : (
                                <RoomMemberAvatarSmall
                                    imageUrl={avatar.imgUrl}
                                    key={index}
                                    type={2}
                                />
                            )
                        })}
                        {rest < 1 ? (
                            ''
                        ) : (
                            <MoreUsersAvatar rest={rest} type={2} />
                        )}
                    </div>
                </div>
            </div>
            <div className="px-5 pb-5 pt-2 text-white flex justify-between">
                <div className="text-[16px]">Aurory Hatch Event</div>
                <div className="flex justify-between text-[12px] font-medium gap-5">
                    <div className="flex items-center">
                        <div className="pt-[2px]">
                            {props.reward + ' ' + props.unit}
                        </div>
                        <div className="text-[#73DBC2] pl-1">
                            <Trophy />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="pt-[2px]">{props.startDate}</div>
                        <div className="text-[#73DBC2] pl-1">
                            <CalendarDays />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DaoEventPanel
