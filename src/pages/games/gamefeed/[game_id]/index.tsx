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
  var gameId = parseInt(game_id as string) ? parseInt(game_id as string): 0;

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
            id={gameId}
            isPreview={!isMarketplace}
            type={type as string}
            avatarUrl={games[gameId].avatarUrl}
            websiteUrl={games[gameId].websiteUrl}
            iframeUrl={games[gameId].iframeUrl ? games[gameId].iframeUrl: ""}
            backUrl={games[gameId].backUrl}
            title={games[gameId].communityName}
            description={games[gameId].description}
            walletAddress={games[gameId].walletAddress}
            icon={games[gameId].walletIcon}
          />
        }
        onClick={() => setSidebarToggler(!sidebarToggler)}
      >
        <GameContent />
      </Layout>
  )
}

export default GameFeed