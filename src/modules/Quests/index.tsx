import React from "react"
import { SubTitle } from "components/Common/Titles";
import { QuestPanel, QuestGlobalPanel } from "components/Common/Panels";
import { SOLARITY_QUESTS, SOLARITY_GLOBAL_QUESTS } from 'data/Quest';

const Quests = ({sidebarToggler}) => {
    return (
        <div className='my-[16px]'>
            <SubTitle title="Solarity Quests" />
            <div className="flex gap-8 mb-8">
                {SOLARITY_QUESTS.map((quest, index) => (    
                    <QuestPanel
                        {...quest}
                        index={index}
                        onClick={() => {}}
                    />
                ))}
            </div>
            <SubTitle title="All Quests" />
            <div className="flex gap-8">
                {SOLARITY_GLOBAL_QUESTS.map((quest, index) => (
                    <QuestGlobalPanel
                    {...quest}
                        index={index}
                        onClick={() => {}}
                    />
                ))}
            </div>
        </div>
    )
}

export default Quests