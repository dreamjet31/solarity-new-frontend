import React from 'react'
import Quest from './Quest'

const Quests = (props) => {
    return (
        <div className="mb-4">
            <div className="text-white text-[25px] font-medium mb-2">
                Quests
            </div>
            {props.quests.map((quest) => (
                <Quest
                    name={quest.name}
                    detail={quest.detail}
                    score={quest.score}
                    achievers={quest.achievers}
                />
            ))}
        </div>
    )
}

export default Quests
