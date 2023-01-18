import React, { useEffect } from "react";
import Image from "next/image";

import RoomInfoDlg from "components/Experience/RoomInfoDlg";
import ACTIONS from "config/actions";

const ExperienceBanner = (props) => {

  useEffect(() => {
    setTimeout(() => {
      if (!!(window as any).socket)
        (window as any).socket.emit(ACTIONS.ROOM_LIST, {});
    }, 10);
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full relative rounded-[25px] overflow-hidden hidden lg:block">
        {props.selectedLiveRoom.imageUrl ? (
          <Image
            src={!!props.selectedLiveRoom.imageUrl ? props.selectedLiveRoom.imageUrl : `/images/experience/room_images/room_1.jpg`}
            layout="fill"
            alt="Experience Banner Image"
          />
        ) : (
          <div className='flex border border-[#1A1A1C] rounded-[25px]'>
            <div className='relative w-[50%] h-[496px] bg-[#131314] lg:hidden xl:block'>
              <Image src="/images/intro/slides/hubs.png" layout="fill" className="rounded-[25px]" />
            </div>
            <div className='md:w-[100%] xl:w-[50%] h-[496px] bg-[#131314] flex items-center justify-center text-center rounded-[25px]'>
              <div>
                <h2 className='text-[30px] font-[700] title-color'>HUBS</h2>
                <p className='center text-[19px] font-[500] content-color'> Socialize, play, bet and trade in the <br />most immersive way possible.<br />Poker, WL hunting, presentations and more.<br /></p>
              </div>
            </div>
          </div>
        )}

        {!!props.selectedLiveRoom.title && (
          <RoomInfoDlg
            selectedLiveRoom={props.selectedLiveRoom}
          />
        )}
      </div>
    </div>
  );
};

export default ExperienceBanner;
