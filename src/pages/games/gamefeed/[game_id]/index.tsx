import React, { useState } from 'react'
import { useRouter } from 'next/router'

import GameContent from 'components/Game/GameContent'
import Header from 'components/Community/Feed/Header'
import Layout from "components/Layout"

import { games } from 'data/Community'
import MobileBackButton from 'components/Game/MobileBackButton'
import { setMobileGameModal } from 'redux/slices/commonSlice'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'

function GameFeed() {
  const [sidebarToggler, setSidebarToggler] = useState(false)
  const router = useRouter();
  const dispatch = useDispatch();
  const { game_id, type } = router.query;
  var gameId = parseInt(game_id as string) ? parseInt(game_id as string): 0;

  const { mobileGameModalVisibility } = useSelector((state: RootStateOrAny) => (state.common));

  const [isMarketplace, setIsMarketplace] = useState(false)

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
          <iframe src={games[gameId].iframeUrl} frameborder="0" width="100%" height="92%"></iframe>
        </div>
      </Layout>
    );
  } else {
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
    );
  }
}

export default GameFeed