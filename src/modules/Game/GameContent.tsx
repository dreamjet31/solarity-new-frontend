import GameItems from "components/Marketplace/NFTItems/GameItems";
import Header from "components/Marketplace/NFTItems/Header";
import React from "react";
import { games } from 'data/Community';
import GameItem from "components/Marketplace/NFTItems/GameItem";
import Image from "next/image";

const GameContent = () => {
  const gameRightArrowClick = () => {
    (document as any).querySelector('.game-items').scrollLeft += 200;
  }
  const gameLeftArrowClick = () => {
      (document as any).querySelector('.game-items').scrollLeft -= 200;
  }

  const gotoDetailPage = () => {
    
  }

  return (
    <div>
      <div className='text-white text-[25px] font-medium mt-20 mb-2'>
        Libraries
      </div>
      <div className="grid gap-6 grid-cols-6">
        {games.map((game, index) => (
            <div className=" col-span-1 flex flex-col border-[1.2px] border-[#272829] rounded-[20px] p-[2px]
            relative cursor-pointer hover:border-primary" key={index} onClick={gotoDetailPage}>
              <div className=" rounded-[15px] overflow-hidden w-full">
                <img src={game.itemUrl} className='rounded-2xl' width="100%" height={232} alt="room_image" />
              </div>
              <div className='flex md:flex-row xs:flex-col-reverse justify-between gap-[6px] mt-[20px]'>
                <div className='font-[500] text-[14px] ml-[12px] text-center'>
                  <div className="font-['Outfit'] text-[#929298]">
                    {game.communityName}
                  </div>
                </div>
                {/* <div className='flex text-white px-3'>
                <div className='text-[#29B080] pr-1'>
                <Users />
                </div>
                {Math.floor(Math.random() * 20)}
                </div> */}
              </div>
            </div>
        ))}
      </div>
      <Header name={'What yoru friends play'} onRightArrowClick={gameRightArrowClick} onLeftArrowClick={gameLeftArrowClick} />
      <div className=' col-span-1 mb-8'>
          <GameItems items={games.slice(2, 8)} state={1}/>
      </div>
    </div>
  );
}

export default GameContent;