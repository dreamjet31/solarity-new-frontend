import React, { useEffect, useState } from "react";
import { useAsyncMemo } from 'use-async-memo';

import GameBanner from 'modules/Game/GameBanner';
import GameContent from 'modules/Game/GameContent';
import Layout from "components/Layout";
import { apiCaller } from "utils/fetcher";

const GamePage = () => {
  const [sidebarToggler, setSidebarToggler] = useState(false);

  const games = useAsyncMemo(async () => {
    try {
      const {
        data: { data }
      } = await apiCaller.get(`/games`);
      console.log(data);
      return data;
    } catch (error) {
      console.error('Something went wrong.');
      return [];
    }
  }, []);

  return (
    <Layout
      sidebarToggler={sidebarToggler}
      banner={<div></div>}
      onClick={() => setSidebarToggler(!sidebarToggler)}
    >
      <GameContent games={games || []} />
    </Layout>
  );
}

export default GamePage;