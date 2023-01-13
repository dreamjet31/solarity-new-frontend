import React, { useState } from 'react'
import { useRouter } from 'next/router'

import GameContent from 'components/Game/GameContent'
import Header from 'components/Community/Feed/Header'
import Layout from "components/Layout"

import { games } from 'data/Community'

function GameFeed() {
  const [sidebarToggler, setSidebarToggler] = useState(false)
  const router = useRouter();
  const { game_id, type } = router.query;
  var gameId = parseInt(game_id as string) ? parseInt(game_id as string): 0;

  const [isMarketplace, setIsMarketplace] = useState(false)

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