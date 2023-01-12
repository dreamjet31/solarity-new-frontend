import React, { useEffect, useState } from "react";
import ExploreRoomItem from "components/Experience/ExploreRoom/ExploreRoomItem";
import ExploreRoomTitle from "components/Experience/ExploreRoom/ExploreRoomTitle";
import { SolanaIcon } from "components/icons";
import TopRoomItem from 'components/Experience/TopRoomItem';
import Header from "components/Marketplace/NFTItems/Header";
import LiveRoomItems from "components/Marketplace/NFTItems/LiveRoomItems";
import { ExploreRoomData } from "data/Experience";
import { RootStateOrAny } from "react-redux";
import { useAppSelector } from "redux/hooks";
import BaseUrl from "config";

const ExploreSection = () => {

  var { rooms, liveRooms, chatSidebarVisibility } = useAppSelector((state: RootStateOrAny) => ({
    chatSidebarVisibility: state.chat.chatSidebarVisibility,
    rooms: state.profile.data.rooms,
    liveRooms: state.chat.rooms,
  }));
  var [sortedRooms, setSortedRooms] = useState<any[]>([])

  useEffect(() => {
    if (!!rooms && rooms.length != 0) {
      // To sort rooms
      var tmpRooms = [...rooms];
      tmpRooms.sort((a: any, b: any) => {
        return a.roomNo - b.roomNo;
      });
      setSortedRooms(tmpRooms);
    } else {
    }
  }, [rooms])

  const roomRightArrowClick = () => {
    (document as any).querySelector('.room-items').scrollLeft += 200;
  }
  const roomLeftArrowClick = () => {
    (document as any).querySelector('.room-items').scrollLeft -= 200;
  }

  return (
    <div className="w-full">
      <Header name={'From Your Community'} count={liveRooms.length} onRightArrowClick={roomRightArrowClick} onLeftArrowClick={roomLeftArrowClick} />
      <div className=' col-span-1 pb-10'>
        <LiveRoomItems items={liveRooms} />
      </div>
      <ExploreRoomTitle number={3} />
      <div className={
        `grid 
        ${chatSidebarVisibility ? 
          '2xl:grid-cols-10 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 grid-cols-2': 
          '2xl:grid-cols-12 xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6 grid-cols-4'
        } 
        lg:gap-[32px] xs:gap-[16px] w-full`
      }>
        <TopRoomItem
          title="SolGods Room owned by TMETA"
          imageUrl="/images/rooms/room1.png"
          roomUrl={BaseUrl + "/tmeta/roomview?no=1"}
        />
        <TopRoomItem
          title="Money Room owned by TMETA"
          imageUrl="/images/rooms/room0.png"
          roomUrl={BaseUrl + "/tmeta/roomview?no=0"}
        />
        <TopRoomItem
          title="SolGods Room owned by Super"
          imageUrl="/images/rooms/room1.png"
          roomUrl={BaseUrl + "/super/roomview?no=1"}
        />
        <TopRoomItem
          title="Money Room owned by Super"
          imageUrl="/images/rooms/room0.png"
          roomUrl={BaseUrl + "/super/roomview?no=0"}
        />
      </div>
    </div>
  );
};

export default ExploreSection;
