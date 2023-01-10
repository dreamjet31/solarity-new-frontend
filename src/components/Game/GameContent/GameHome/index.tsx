import React from 'react';
import Leaderboard from './Leaderboard';
import DaoEventPanel from './DaoEventPanel';
import GameGallery from './GameGallery';
import GameItems from 'components/Marketplace/NFTItems/GameItems';
import Header from 'components/Marketplace/NFTItems/Header';
import { games } from 'data/Community';

const GameHome = () => {

  const gameRightArrowClick = () => {
    (document as any).querySelector('.game-items').scrollLeft += 200;
  }
  const gameLeftArrowClick = () => {
      (document as any).querySelector('.game-items').scrollLeft -= 200;
  }

  return (
    <div className='pt-6'>
      <div className='flex custom-2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col gap-6'>
        <div className='flex-auto'>
          <GameGallery />
        </div>
        <div className='custom-2xl:w-[385px] xl:w-[385px] lg:w-[385px] md:w-[385px] sm:w-full xs:w-full'>
          <Leaderboard />
          <div className=''>
            <div className='text-white text-[25px] font-medium'>
              Lobbies
            </div>
            <div className=''>
              <DaoEventPanel />
              <DaoEventPanel />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Header name={'Recommended'} count={games.length} onRightArrowClick={gameRightArrowClick} onLeftArrowClick={gameLeftArrowClick} />
        <div className=' col-span-1'>
            <GameItems items={games} />
        </div>
      </div>
    </div>
  );
}

export default GameHome;