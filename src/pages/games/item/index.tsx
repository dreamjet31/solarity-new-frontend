import React, { useState } from "react";
import Layout from "components/Layout";
import GameBanner from 'modules/Game/GameBanner';
import GameContent from 'modules/Game/GameContent';

const Games = () => {
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

export default Games;