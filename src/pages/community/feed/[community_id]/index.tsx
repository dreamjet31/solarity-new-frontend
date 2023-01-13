import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from "components/Layout"
import CommunityBanner from "modules/Community/CommunityBanner"
import Feed from 'components/Community/Feed'
import MarketplaceBanner from 'modules/Marketplace/MarketplaceBanner'
import { RoomItemProps } from 'components/Marketplace/Rooms/Items/Item'
import { rooms } from "data/Community"
import Image from 'next/image'
import MobileBackButton from "components/Game/MobileBackButton";
import ConfirmationDlg from 'components/Marketplace/ConfirmationDlg'
import RoomDlg from 'components/Marketplace/Rooms/RoomDlg'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { setMobileGameModal } from 'redux/slices/commonSlice'

function CommunityFeed() {
  const [sidebarToggler, setSidebarToggler] = useState(false)
  const router = useRouter();
  const { community_id, type } = router.query;
  const dispatch = useDispatch();

  const { mobileGameModalVisibility } = useSelector((state: RootStateOrAny) => (state.common));

  const [isMarketplace, setIsMarketplace] = useState(false)
  const [previewImg, setPreviewImg] = useState(rooms[0].imgUrl)
  const [previewTitle, setPreviewTitle] = useState(rooms[0].collectionName)
  const [previewSubtitle, setPreviewSubtitle] = useState(rooms[0].roomName)
  const [previewPrice, setPreviewPrice] = useState(rooms[0].price)
  const [confirmationDlgToggle, setConfirmationDlgToggle] = useState(false)
  const [previewDlgToggle, setPreviewDlgToggle] = useState(false)
  const [roomId, setRoomId] = useState(0)
  const [isExpand, setIsExpand] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const ConfirmationDlgToggle = (open: boolean) => {
    setConfirmationDlgToggle(open)
  }

  const PreviewDlgToggle = (open: boolean) => {
    setPreviewDlgToggle(open)
  }

  const VisitRoom = (roomInfo: RoomItemProps, index: number) => {
    setPreviewTitle(roomInfo.collectionName)
    setPreviewSubtitle(roomInfo.roomName)
    setPreviewPrice(roomInfo.price)
    setPreviewImg(roomInfo.imgUrl)
    setPreviewDlgToggle(true)
    setRoomId(index)
  }

  const expandRoom = (status: boolean) => {
    setIsExpand(status);
  }

  const Buy = () => {
    setConfirmationDlgToggle(true);
  }
  if(mobileGameModalVisibility) {
    return (
      <Layout
        sidebarToggler={sidebarToggler}
        banner={<div></div>}
        onClick={() => setSidebarToggler(!sidebarToggler)}
      >
        <div className='w-full h-full relative'>
          <div className='absolute top-[50px] right-[0px]'>
            <MobileBackButton onClick={() => {
              dispatch(setMobileGameModal(false));
            }}/>
          </div>
          <iframe src="https://www.itslearning.tk/subway-surfers/" frameborder="0" width="100%" height="92%"></iframe>
        </div>
      </Layout>
    );
  } else {
    return (
      <>
      {
        !isExpand ? <Layout
        sidebarToggler={sidebarToggler}
        banner={isMarketplace ? <div className='mb-[60px]'>
          <MarketplaceBanner
            isDlg={false}
            activeRoom={previewImg}
            buy={Buy}
            isExpand={isExpand}
          />
        </div> : <></>}
        onClick={() => setSidebarToggler(!sidebarToggler)}
      >
        {community_id && (
          <Feed 
            activeIndex={activeIndex} 
            type={type} 
            setActiveIndex={setActiveIndex} 
            id={community_id} 
            isPreview={!isMarketplace} 
            visitRoom={VisitRoom} 
            setIsMarketplace={setIsMarketplace} 
          />
        )}
        <ConfirmationDlg id={roomId} roomName={previewSubtitle} collectionName={previewTitle} price={previewPrice}
          dlgToggle={confirmationDlgToggle} setDlgToggle={ConfirmationDlgToggle} imgUrl={previewImg} numberOfFrames={52} connectingOtherUsers={true} anotherInfo={"Room Info"} />
        <RoomDlg title={previewTitle} subtitle={previewSubtitle} description={'The user immediately has a preview of the first room in the list.'} price={previewPrice} activeRoom={previewImg} buy={Buy} dlgToggle={previewDlgToggle} setDlgToggle={PreviewDlgToggle} isDlg={true} expandRoom={expandRoom} isExpand={isExpand} />
      </Layout> : 
        <div>
          <Image
            src={`/images/experience/room_images/room_${roomId + 1}.jpg`}
            layout="fill"
          />
          <div onClick={() => expandRoom(false)}>
            <div
              className=" absolute w-[52px] h-[52px] rounded-[15px] box-border left-[32px] top-[32px] bg-[#131314]
                      border-[1.2px] border-[#272829] overflow-hidden flex
                      justify-center items-center cursor-pointer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0334 13.28L5.68676 8.9333C5.17342 8.41997 5.17342 7.57997 5.68676 7.06664L10.0334 2.71997"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      }
      </>
    );
  };
}

export default CommunityFeed