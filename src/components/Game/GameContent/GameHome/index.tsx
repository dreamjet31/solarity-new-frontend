import React from 'react'
import Leaderboard from './Leaderboard'
import DaoEventPanel from './DaoEventPanel'
import GameGallery from './GameGallery'
import GameTweets from './GameTweets'
import GameItems from 'components/Marketplace/NFTItems/GameItems'
import Header from 'components/Marketplace/NFTItems/Header'
import Quests from './Quests'
import { useAsyncMemo } from 'use-async-memo'
import { apiCaller } from 'utils/fetcher'

type GameHomeType = {
    game: any
}

const GameHome = (props: GameHomeType) => {
    const gameRightArrowClick = () => {
        ;(document as any).querySelector('.game-items').scrollLeft += 200
    }
    const gameLeftArrowClick = () => {
        ;(document as any).querySelector('.game-items').scrollLeft -= 200
    }

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
        <div className="pt-6">
            <div className="flex custom-2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col gap-6">
                <div className="flex-auto">
                    <GameGallery galleryImages={props.game.galleryImages} />
                    <GameTweets />
                </div>
                <div className="custom-2xl:w-[385px] xl:w-[385px] lg:w-[385px] md:w-[385px] sm:w-full xs:w-full">
                    {/* <Leaderboard leaderboard={game.leaderboard}/> */}
                    <Quests quests={props.game.quests} />
                    <div className="">
                        {/* <div className='text-white text-[25px] font-medium'>
              Lobbies
            </div> */}
                        {/* <div className=''>
              {game.lobbies.map((lobby, index) => (
                <DaoEventPanel 
                  title={lobby.title}
                  key={index}
                  startDate={lobby.startDate}
                  reward={lobby.reward}
                  unit={lobby.unit}
                  avatar={lobby.avatar}
                  mainMember={lobby.mainMember}
                  backgroundImage={lobby.backgroundImage}
                />
              ))}
            </div> */}
                    </div>
                </div>
            </div>
            <div>
                <Header
                    name={'Recommended'}
                    count={(games || []).length}
                    onRightArrowClick={gameRightArrowClick}
                    onLeftArrowClick={gameLeftArrowClick}
                />
                <div className=" col-span-1 mb-20">
                    <GameItems items={games || []} />
                </div>
            </div>
        </div>
    )
}

export default GameHome
