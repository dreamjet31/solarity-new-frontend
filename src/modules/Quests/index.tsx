import React from "react"
import { SubTitle } from "components/Common/Titles";
import { QuestPanel } from "components/Common/Panels";
import { SOLARITY_QUESTS } from 'data/Quest';

const Quests = ({sidebarToggler}) => {
    return (
        <div className='my-[16px]'>
            <SubTitle title="Solarity Quests" />
            <div className="flex gap-8">
                {SOLARITY_QUESTS.map((quest, index) => (    
                    <QuestPanel
                        {...quest}
                        onClick={() => {}}
                    />
                ))}
            </div>
        </div>
    )
}

export default Quests