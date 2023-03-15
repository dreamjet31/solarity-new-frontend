import React from 'react'

type RoomInfoDlgTextType = {
    text: string
}

const RoomInfoDlgText = (props: RoomInfoDlgTextType) => {
    return (
        <div
            className={`md:flex font-['Outfit'] font-[200] text-[16px] text-[#b3b3b7] pt-[12px]`}
        >
            {props.text}
        </div>
    )
}

export default RoomInfoDlgText
