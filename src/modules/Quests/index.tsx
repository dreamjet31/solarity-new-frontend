import React, { useEffect, useMemo } from 'react'
import { SubTitle } from 'components/Common/Titles'
import {
    QuestPanel,
    QuestGlobalPanel,
    GreyPanel,
} from 'components/Common/Panels'
import { SOLARITY_QUESTS, SOLARITY_GLOBAL_QUESTS } from 'data/Quest'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useAsyncMemo } from 'use-async-memo'
import { apiCaller } from 'utils/fetcher'
import { useRouter } from 'next/router'
import Leaderboard from 'components/Common/Leaderboard/Leaderboard'

const Quests = ({ sidebarToggler }) => {
    const router = useRouter()

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

    const sendLink = (game) => {
        router.push('/games/gamefeed/' + game._id + '?type=' + 'game')
    }

    return (
        <div className="my-[16px]">
            <GreyPanel />
            <div className="flex flex-row mt-10 ">
                <div className="flex flex-col">
                    <SubTitle title="Solarity Quests" />
                    <div className="flex flex-row">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 custom-2xl:grid-cols-5 gap-8 mb-8">
                            {SOLARITY_QUESTS.map((quest, index) => (
                                <QuestPanel
                                    key={index}
                                    {...quest}
                                    index={index}
                                    onClick={() => {}}
                                />
                            ))}
                        </div>
                    </div>

                    <SubTitle title="All Quests" />

                    <div className="flex flex-row flex-wrap">
                        {games &&
                            games.map((game, index1) => (
                                <div className="flex flex-wrap mb-8 gap-8">
                                    {game.quests.map((quest, index2) => (
                                        <QuestGlobalPanel
                                            key={index2}
                                            title={quest.name}
                                            description={quest.detail}
                                            avatar={game.avatarImage}
                                            icon={'/images/wallets/xp.png'}
                                            amount={quest.score}
                                            index={index1 * 4 + index2}
                                            onClick={() => {
                                                sendLink(game)
                                            }}
                                        />
                                    ))}
                                </div>
                            ))}
                    </div>
                </div>
                <div className="flex flex-1"></div>
                <div className="flex flex-col">
                    <SubTitle title="Leaderboard" />
                    <Leaderboard />
                </div>
            </div>
        </div>
    )
}

export default Quests
