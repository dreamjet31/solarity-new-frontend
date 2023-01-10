import React, { useState } from "react";

import GameBanner from 'modules/Game/GameBanner';
import GameContent from 'modules/Game/GameContent';
import Layout from "components/Layout"

const GamePage = () => {
  const [sidebarToggler, setSidebarToggler] = useState(false)
  return (
    <Layout
      sidebarToggler={sidebarToggler}
      banner={<GameBanner />}
      onClick={() => setSidebarToggler(!sidebarToggler)}
    >
      <GameContent />
    </Layout>
  );
}

export default GamePage;