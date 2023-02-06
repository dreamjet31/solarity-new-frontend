import React from "react";
import ProfileFeedSharedBadge from 'components/Profile/ProfileFeedSharedBadge';

type QuestType = {
  name: string;
  detail: string;
  score: number;
}

const Quest = (props: QuestType) => {
  return (
    <div className="relative p-8 flex flex-row justify-start bg-[#181818] rounded-[20px] mb-[32px] break-all md:flex-nowrap xs:flex-wrap">

        <div className="absolute top-[-10px] left-[-10px]">
            <ProfileFeedSharedBadge srcUrl={"/images/social/profile_feed_discord.png"} />
        </div>

        <div className="absolute top-[10px] right-[40px]">
            <div className="profileFeedName font-400 text-primary md:text-[16px] xs:text-[16px] leading-[200%]">
                XP: {props.score}
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
  );
}

export default Quest;