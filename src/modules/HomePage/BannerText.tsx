import React, { useState } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ButtonLabel } from "components/Common/Buttons";

import { BannericonImg1, BannericonImg2, BannericonImg3, BannericonImg4 } from "components/Common/Images";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useRouter } from "next/router";

export const BannerText = () => {
  const router = useRouter();
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
        <div className="w-full mt-[30px] mb-[20px] sm:my-[10px] relative text-left z-50">
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
              <span className="hidden sm:inline text-white text-[46px] md:text-[60px] lg:text-[74px] font-semibold tracking-wide leading-[2.7rem] md:leading-[120%] banner-text">
                Experience the power of play-to-earn
              </span>
            </AnimationOnScroll>
        </div>
        <div className="flex gap-[200px] mx-[100px]">
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" className="relative z-50 relative">
            <div className="my-[15px] mb-[56px] text-left">
              <div className="flex mb-[12px]">
                <img src="/images/homepage/passport.png" width={224} height={138}/>
              </div>
              <div className="flex center text-white text-[36px] mb-[12px]">
                Passport (∞)
              </div>
              <div className="flex items-center mb-[12px]">
                  <ButtonLabel icon={BannericonImg1} />
                  <span className="leading-[60px] text-[#B3B3B7] pl-6">Free tier Battle Pass</span> 
              </div>
              <div className="flex items-center mb-[12px]">
                  <ButtonLabel icon={BannericonImg2} />
                  <span className="leading-[60px] text-[#B3B3B7] pl-6">3D Customized NFT</span> 
              </div>
              <div className="flex items-center mb-[12px]">
                  <ButtonLabel icon={BannericonImg3} />
                  <span className="leading-[60px] text-[#B3B3B7] pl-6">Access to quests</span> 
              </div>
              <div className="flex items-center mb-[24px]">
                  <ButtonLabel icon={BannericonImg4} />
                  <span className="leading-[60px] text-[#B3B3B7] pl-6">Free Mint</span> 
              </div>
              <div className="flex flex-row justify-start items-center gap-6">
                <WalletMultiButton />
                <button className="text-white text-[22px]" onClick={() => router.push({ pathname: '/explore' })}>Skip</button>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" className="relative z-50 relative">
            <div className="my-[15px] mb-[56px] text-left">
              <div className="flex mb-[12px]">
                <img src="/images/homepage/premium.png" width={224} height={138}/>
              </div>
              <div className="flex center text-white text-[36px] mb-[12px]">
                SGN Bundle (2,000)
              </div>
              <div className="flex items-center mb-[12px]">
                  <ButtonLabel icon={BannericonImg1} />
                  <span className="leading-[60px] text-[#B3B3B7] pl-6">Premium BP: loot boxes and lottery </span> 
              </div>
              <div className="flex items-center mb-[12px]">
                  <ButtonLabel icon={BannericonImg2} />
                  <span className="leading-[60px] text-[#B3B3B7] pl-6">Personal hub</span> 
              </div>
              <div className="flex items-center mb-[12px]">
                  <ButtonLabel icon={BannericonImg3} />
                  <span className="leading-[60px] text-[#B3B3B7] pl-6">More quest earnings, 0 gdex fees</span> 
              </div>
              <div className="flex items-center mb-[24px]">
                  <ButtonLabel icon={BannericonImg4} />
                  <span className="leading-[60px] text-[#B3B3B7] pl-6">3 Sol</span> 
              </div>
              <div className="flex flex-row justify-start items-center gap-6">
                <WalletMultiButton />
                <button className="text-white text-[22px]" onClick={() => router.push({ pathname: '/explore' })}>Skip</button>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
    </>
  );
};
