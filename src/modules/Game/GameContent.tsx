import GameItems from "components/Marketplace/NFTItems/GameItems";
import Header from "components/Marketplace/NFTItems/Header";
import React from "react";
import { games } from 'data/Community';

const GameContent = () => {
  const gameRightArrowClick = () => {
    (document as any).querySelector('.game-items').scrollLeft += 200;
  }
  const gameLeftArrowClick = () => {
      (document as any).querySelector('.game-items').scrollLeft -= 200;
  }

  return (
    <div>
      <Header name={'Library'} onRightArrowClick={gameRightArrowClick} onLeftArrowClick={gameLeftArrowClick} />
      <div className=' col-span-1'>
          <GameItems items={games} state={1}/>
      </div>
      <div className=' col-span-1'>
          <GameItems items={games} state={1}/>
      </div>
      <Header name={'What yoru friends play'} onRightArrowClick={gameRightArrowClick} onLeftArrowClick={gameLeftArrowClick} />
      <div className=' col-span-1 mb-8'>
          <GameItems items={games} state={1}/>
      </div>
    </div>
  );
}

export default GameContent;