import React, { useState } from "react";
import { useRouter } from "next/router";

import GameContent from "components/Game/GameContent";
import Header from "components/Community/Feed/Header";
import Layout from "components/Layout";

import { games } from "data/Community";
import MobileBackButton from "components/Game/MobileBackButton";
import { setMobileGameModal } from "redux/slices/commonSlice";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useAsyncMemo } from "use-async-memo";
import { apiCaller } from "utils/fetcher";
import { MemberIcon } from "components/icons/MemberIcon";

function GameFeed() {
  const [sidebarToggler, setSidebarToggler] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { game_id, type } = router.query;

  const game = useAsyncMemo(async () => {
    try {
      const {
        data: { game },
      } = await apiCaller.post(`/games/game`, { gameId: game_id });
      console.log(game);
      return game;
    } catch (error) {
      console.error("Something went wrong.");
      return null;
    }
  }, [game_id]);

  const { mobileGameModalVisibility } = useSelector(
    (state: RootStateOrAny) => state.common
  );

  const [isMarketplace, setIsMarketplace] = useState(false);

  // if(mobileGameModalVisibility) {
  //   return (
  //     <Layout
  //       sidebarToggler={sidebarToggler}
  //       banner={<div></div>}
  //       onClick={() => setSidebarToggler(!sidebarToggler)}
  //     >
  //       <div className='w-full h-full relative'>
  //         <div className='absolute top-[50px] right-[0px]'>
  //           <MobileBackButton onClick={() => {
  //             dispatch(setMobileGameModal(false));
  //           }}/>
  //         </div>
  //         <iframe src={games[gameId].iframeUrl} frameborder="0" width="100%" height="92%"></iframe>
  //       </div>
  //     </Layout>
  //   );
  // } else {
  if (game) {
    return (
      <Layout
        sidebarToggler={sidebarToggler}
        banner={
          <Header
            isPreview={!isMarketplace}
            type={type as string}
            id={game._id}
            websiteUrl={game.websiteUrl}
            iframeUrl={game.gameUrl ? game.gameUrl : ""}
            avatarUrl={game.avatarImage}
            backUrl={game.bannerImage}
            title={game.title}
            description={game.description}
            walletAddress={""}
            icon={MemberIcon}
          />
        }
        onClick={() => setSidebarToggler(!sidebarToggler)}
      >
        <GameContent game={game} />
      </Layout>
    );
  } else {
    return <div>Please wait for a second.</div>;
  }
  // }
}

export default GameFeed;
