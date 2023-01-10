import React, { useState } from "react";

import GamesBanner from 'modules/Game/GamesBanner';
import Game from 'modules/Game';
import Layout from "components/Layout"

const GamePage = () => {
  const [sidebarToggler, setSidebarToggler] = useState(false)
  return (
    <Layout
      sidebarToggler={sidebarToggler}
      banner={<GamesBanner />}
      onClick={() => setSidebarToggler(!sidebarToggler)}
    >
      <Game />
    </Layout>
  );
}

export default GamePage;