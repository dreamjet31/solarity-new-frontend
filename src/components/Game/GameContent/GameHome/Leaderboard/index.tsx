import React from 'react'

type LeaderboardType = {
    leaderboard: string
}

const Leaderboard = (props: LeaderboardType) => {
    return (
        <div className="mb-4">
            <div className="text-white text-[25px] font-medium mb-2">
                Leaderboard
            </div>
            <img src={props.leaderboard} width="100%" alt="Leaderboard" />
        </div>
    )
}

export default Leaderboard
