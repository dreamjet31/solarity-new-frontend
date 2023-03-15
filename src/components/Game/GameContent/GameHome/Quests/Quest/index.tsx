import React from 'react'
import ProfileFeedSharedBadge from 'components/Profile/ProfileFeedSharedBadge'
import { RootStateOrAny, useSelector } from 'react-redux'

type QuestType = {
    name: string
    detail: string
    score: number
    achievers: any[]
}

const Quest = (props: QuestType) => {
    const { profile } = useSelector((state: RootStateOrAny) => ({
        profile: state.profile.data,
    }))
    return (
        <div className="relative p-8 flex flex-row justify-start bg-[#181818] rounded-[20px] mb-[32px] break-all md:flex-nowrap xs:flex-wrap">
            <div className="absolute top-[-10px] left-[-10px]">
                <ProfileFeedSharedBadge
                    srcUrl={'/images/social/profile_feed_discord.png'}
                />
            </div>

            <div className="absolute top-[10px] right-[40px]">
                <div className="profileFeedName font-400 text-primary md:text-[16px] xs:text-[16px] leading-[200%]">
                    {props.achievers.findIndex((s) => s.user == profile._id) ==
                    -1 ? (
                        <span>XP: {props.score}</span>
                    ) : (
                        <span>You got {props.score} XP.</span>
                    )}
                </div>
            </div>

            <div className="mr-6 min-w-[40px]">
                <div className="flex-row items-center xs:flex pl-4 truncate">
                    <div className="profileFeedName font-400 text-[#b3b3b7] md:text-[20px] xs:text-[16px] leading-[200%]">
                        {props.name}
                    </div>
                </div>
                <div className="flex flex-col ">
                    <div className="profileFeed text-[#929298] font-500 md:text-[16px] xs:text-[14px] flex-wrap">
                        {props.detail}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quest
