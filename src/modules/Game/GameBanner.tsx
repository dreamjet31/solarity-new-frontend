import { SmallButton } from "components/Common/Buttons";
import React from "react";

const GameBanner = () => {
  return (
    <div className="relative">
      <img src={"/images/community/backs/BG (1).png"} className="" width={"100%"} height={322} alt="background" />
      <div className={` absolute top-6 left-25 px-[52px] w-[513px] pt-[66px] pb-7 text-left`}>
        <h2 className="text-[30px] font-[700] text-white pb-4">{"Aurory SZN is here!"}</h2>
        <p className={`text-[15px] font-[500] text-[#A29999] pb-4`}>
          {"Damage with Legendary Weapons, Play now to earn infinite rewards, and claim you airdrop!"}
        </p>
        <SmallButton caption={"Launch Now"} onClick={() => {}} />
      </div>
      <div className={` absolute bottom-6 left-25 px-[52px] w-[513px] pt-[66px] pb-7 text-left`}>
        <h2 className="text-[20px] font-[700] text-white pb-4">{"Games of the week:"}</h2>
        <div className="flex gap-2">
          <img 
            src="/images/community/posters/Aurory.png" 
            className={`border-4 border-[#73DBC2] cursor-pointer hover:border-4 hover:border-[#73DBC2] rounded-[20px]`} 
            width={78} 
            height={78} 
            alt="game" 
          />
          <img 
            src="/images/community/posters/Halo.jpeg" 
            className="cursor-pointer  hover:border-4 hover:border-[#73DBC2] rounded-[20px]" 
            width={78} 
            height={78} 
            alt="game" 
          />
          <img 
            src="/images/community/posters/HeroesEmpires.png" 
            className="cursor-pointer  hover:border-4 hover:border-[#73DBC2] rounded-[20px]" 
            width={78} 
            height={78} 
            alt="game" 
          />
          <img 
            src="/images/community/posters/MiniRoyale.png" 
            className="cursor-pointer  hover:border-4 hover:border-[#73DBC2] rounded-[20px]" 
            width={78} 
            height={78} 
            alt="game" 
          />
        </div>
      </div>
    </div>
  );
}

export default GameBanner;