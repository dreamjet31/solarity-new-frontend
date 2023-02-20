import React from "react";
import { useRouter } from "next/router";
import { games } from 'data/Community';
import { useDispatch } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';

type GameContentType = {
  games: any[];
}

const GameContent = (props: GameContentType) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const gotoDetailPage = (id, type) => {
    router.push('/games/gamefeed/' + id + '?type=' + type);
  }

  return (
    <div>
      <div className='text-white text-[25px] font-medium mt-5 mb-2'>
        Libraries
      </div>
      <div className="grid gap-6 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mb-6">
        {props.games.map((game, index) => (
          <div 
            className=" col-span-1 flex flex-col border-[1.2px] border-[#272829] rounded-[20px] p-[2px]
              relative cursor-pointer hover:border-primary" 
            key={index} 
            onClick={
              () => {
                gotoDetailPage(
                  game._id, 
                  'game'
                );
              }
            }
          >
            <div className=" rounded-[15px] overflow-hidden w-full">
              <LazyLoadImage
                alt={'game Image'}
                effect="blur"
                src={game.itemImage} 
                className='rounded-2xl'
                width="100%"
                height={232}
              />
            </div>
            <div className='flex md:flex-row xs:flex-col-reverse gap-[6px] my-[10px]'>
              <div className='font-[500] text-[14px] ml-[12px] text-center w-full'>
                <div className="font-['Outfit'] text-[#929298]">
                  {game.title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameContent;