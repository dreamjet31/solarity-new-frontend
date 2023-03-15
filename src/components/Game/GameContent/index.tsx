import TabItem from 'components/Common/Forms/TabItem'
import { GAME_TAB_MENU } from 'data/Game'
import React, { useState } from 'react'
import GameHome from './GameHome'

type GameContentType = {
    game: any
}

const GameContent = (props: GameContentType) => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="w-full">
            <div className={`relative w-full`}>
                <div
                    className={`
            profile-tab flex flex-row relative sm:px-[0px] xs:px-[20px]
            md:w-full xs:w-[87vw]
            border-b-[1px] border-b-semiSplitter overflow-x-scroll scroll-smooth
          `}
                >
                    {GAME_TAB_MENU.map((menu, index) => (
                        <TabItem
                            key={index}
                            title={menu}
                            selectedStatus={activeIndex === index}
                            onClick={() => {
                                setActiveIndex(index)
                            }}
                        />
                    ))}
                </div>
            </div>
            {activeIndex === 0 && <GameHome game={props.game} />}
            {activeIndex === 1 && <div>Quests Part</div>}
            {activeIndex === 2 && <div>Marketplace Part</div>}
            {activeIndex === 3 && <div>Guilds Part</div>}
        </div>
    )
}

export default GameContent
