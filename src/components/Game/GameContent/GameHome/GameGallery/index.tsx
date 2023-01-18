import Image from 'next/image';
import React from 'react';

const GameGallery = () => {
  return (
    <div className=''>
      <div className='flex gap-2 mb-8'>
        <div>
          <img src="/images/games/desc.png" className='rounded-[4px]' width="718" height="391" />
        </div>
        <div className='flex flex-col gap-3'>
          <img src="/images/games/desc2.png" className='rounded-[4px]' width="491" height="190" />
          <img src="/images/games/desc3.png" className='rounded-[4px]' width="491" height="188" />
        </div>
      </div>
      <div>
        <div className='text-white text-[25px] font-medium mb-2'>
          Tweets
        </div>
        <div className='flex gap-4 overflow-hidden'>
          {[0, 1, 2].map((data, index) => (
            <img src="/images/games/tweets.png" key={index} className='rounded-[4px]' width={291} height={215} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameGallery;