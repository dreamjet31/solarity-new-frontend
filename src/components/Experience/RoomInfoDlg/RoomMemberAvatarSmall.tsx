import React from 'react'
import Image from 'next/image'

type RoomMemberAvatarSmallType = {
    imageUrl: string
    type?: number
}

const RoomMemberAvatarSmall = (props: RoomMemberAvatarSmallType) => {
    return (
        <div
            className={`border-[3px] border-[#131314] ${
                props.type == 2
                    ? 'h-[30px] w-[30px] box-content ml-[-10px] rounded-[12px]'
                    : 'h-[40px] w-[40px] box-content ml-[-17px] rounded-[18px]'
            } relative overflow-hidden`}
        >
            <Image
                src={props.imageUrl}
                layout="responsive"
                width={40}
                height={40}
            />
        </div>
    )
}

export default RoomMemberAvatarSmall
