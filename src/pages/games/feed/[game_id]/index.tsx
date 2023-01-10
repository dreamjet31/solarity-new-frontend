import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from "components/Layout"
import CommunityBanner from "modules/Community/CommunityBanner"
import Feed from 'components/Community/Feed'
import MarketplaceBanner from 'modules/Marketplace/MarketplaceBanner'
import { RoomItemProps } from 'components/Marketplace/Rooms/Items/Item'
import { rooms } from "data/Community"
import Image from 'next/image'
import BackButton from "components/Marketplace/RoomSettings/BackButton"
import ConfirmationDlg from 'components/Marketplace/ConfirmationDlg'
import RoomDlg from 'components/Marketplace/Rooms/RoomDlg'
import { useParams } from 'react-router-dom'
import Header from 'components/Community/Feed/Header'
import { games } from 'data/Community'
import GameContent from 'components/Game/GameContent'

function GameFeed() {
  const [sidebarToggler, setSidebarToggler] = useState(false)
  const router = useRouter();
  const { game_id, type } = router.query;

  const [isMarketplace, setIsMarketplace] = useState(false)
  const [previewImg, setPreviewImg] = useState(rooms[0].imgUrl)
  const [previewTitle, setPreviewTitle] = useState(rooms[0].collectionName)
  const [previewSubtitle, setPreviewSubtitle] = useState(rooms[0].roomName)
  const [previewPrice, setPreviewPrice] = useState(rooms[0].price)
  const [confirmationDlgToggle, setConfirmationDlgToggle] = useState(false)
  const [previewDlgToggle, setPreviewDlgToggle] = useState(false)
  const [roomId, setRoomId] = useState(0)
  const [searchString, setSearchString] = useState('')
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

  return (
    <Layout
        sidebarToggler={sidebarToggler}
        banner={
          <Header
            id={game_id}
            isPreview={!isMarketplace}
            type={type}
            avatarUrl={games[game_id].avatarUrl}
            websiteUrl={games[game_id].websiteUrl}
            iframeUrl={games[game_id].iframeUrl ? games[game_id].iframeUrl: ""}
            backUrl={games[game_id].backUrl}
            title={games[game_id].communityName}
            description={games[game_id].description}
            walletAddress={games[game_id].walletAddress}
            icon={games[game_id].walletIcon}
          />
        }
        onClick={() => setSidebarToggler(!sidebarToggler)}
      >
        <GameContent />
      </Layout>
  )
}

export default GameFeed