import React, { useEffect, useMemo } from "react"
import { SubTitle } from "components/Common/Titles";
import { QuestPanel, QuestGlobalPanel } from "components/Common/Panels";
import { SOLARITY_QUESTS, SOLARITY_GLOBAL_QUESTS } from 'data/Quest';
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useAsyncMemo } from "use-async-memo";
import { apiCaller } from "utils/fetcher";
import { useRouter } from 'next/router';
const Quests = ({sidebarToggler}) => {

    const router = useRouter();

    const games = useAsyncMemo(async () => {
        try {
          const {
            data: { games }
          } = await apiCaller.get(`/games`);
          return games;
        } catch (error) {
          console.error('Something went wrong.');
          return [];
        }
      }, []);

      const sendLink = (game) => {
        router.push('/games/gamefeed/' + game._id + '?type=' + 'game')
      }

    return (
        <div className='my-[16px]'>
            <SubTitle title="Solarity Quests" />
            <div className="flex gap-8 mb-8">
                {SOLARITY_QUESTS.map((quest, index) => (    
                    <QuestPanel
                        key={index}
                        {...quest}
                        index={index}
                        onClick={() => {}}
                    />
                ))}
            </div>
            <SubTitle title="All Quests" />
            <div className="">
                {games && games.map((game, index1) => (
                    <div className="flex mb-8 gap-8">
                        {game.quests.map((quest, index2) => (
                            <QuestGlobalPanel
                                key={index2}
                                title={quest.name}
                                description={quest.detail}
                                avatar={game.avatarImage}
                                icon={"/images/wallets/xp.png"}
                                amount={quest.score}
                                index={index1 * 4 + index2}
                                onClick={() => {sendLink(game)}}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Quests