import React from 'react'
import Image from 'next/image'
import { minifyString } from 'utils'
import { PrimaryButton } from '../Buttons'

export type QuestGlobalPanelType = {
    index?: number
    title: any
    description: string
    avatar: string
    isAvatar?: boolean
    icon: string
    amount: number
    onClick?: Function
    buttonCaption?: string
}

const QuestGlobalPanel = (props: QuestGlobalPanelType) => {
    return (
        <div
            className={`w-[264px] rounded-[20px] bg-panelBgColor px-[24px] pt-[44px] pb-[24px] relative mb-8 `}
            key={props.index}
        >
            <div className="absolute left-[24px] top-[-12px]">
                <img
                    src={props.avatar}
                    className="border-[3px] border-globalBgColor rounded-[12px]"
                    width={40}
                    height={40}
                    alt={'avatar'}
                />
            </div>
            <div className="text-[#F3F3F3] text-[14px] mb-4">
                {props.title}:&nbsp;
                <span className="text-[#929298]">
                    {minifyString(props.description, 40)}
                </span>
            </div>
            <div className="flex w-full justify-between">
                <div className="flex items-center gap-2">
                    <img
                        src={props.icon}
                        className="h-[16px] rounded-full"
                        alt="icon"
                        width={16}
                        height={16}
                    />
                    <div className="text-[#F3F3F3] text-[18px]">
                        {props.amount}
                    </div>
                </div>
                <div className="w-[60px]">
                    <PrimaryButton
                        caption={props.buttonCaption || 'Play'}
                        onClick={props.onClick}
                        styles="!h-[32px] !rounded-[10px] !py-[8px] !text-[14px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default QuestGlobalPanel
