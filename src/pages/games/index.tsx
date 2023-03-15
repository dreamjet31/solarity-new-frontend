<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { useAsyncMemo } from 'use-async-memo'

import GameBanner from 'modules/Game/GameBanner'
import GameContent from 'modules/Game/GameContent'
import Layout from 'components/Layout'
import { apiCaller } from 'utils/fetcher'
=======
import React, { useEffect, useState } from "react";
import { useAsyncMemo } from "use-async-memo";

import GameBanner from "modules/Game/GameBanner";
import GameContent from "modules/Game/GameContent";
import Layout from "components/Layout";
import { apiCaller } from "utils/fetcher";
>>>>>>> 0886851a017ebc860173b565f68bd291c3166e1f

const GamePage = () => {
    const [sidebarToggler, setSidebarToggler] = useState(false)

<<<<<<< HEAD
    const games = useAsyncMemo(async () => {
        try {
            const {
                data: { games },
            } = await apiCaller.get(`/games`)
            return games
        } catch (error) {
            console.error('Something went wrong.')
            return []
        }
    }, [])

    return (
        <Layout
            sidebarToggler={sidebarToggler}
            banner={<div></div>}
            onClick={() => setSidebarToggler(!sidebarToggler)}
        >
            <GameContent games={games || []} />
        </Layout>
    )
}

export default GamePage
=======
  const games = useAsyncMemo(async () => {
    try {
      const {
        data: { games },
      } = await apiCaller.get(`/games`);
      return games;
    } catch (error) {
      console.error("Something went wrong.");
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
};

export default GamePage;
>>>>>>> 0886851a017ebc860173b565f68bd291c3166e1f
