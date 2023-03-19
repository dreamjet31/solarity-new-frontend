import React from 'react'

const GameTweets = (props) => {
    return (
        <div>
            <div className="text-white text-[25px] font-medium mb-2">
                Tweets
            </div>
            <div className="flex gap-4 overflow-hidden">
                {[0, 1, 2].map((data, index) => (
                    <img
                        src="/images/games/tweets.png"
                        key={index}
                        className="rounded-[4px]"
                        width={291}
                        height={215}
                    />
                ))}
            </div>
        </div>
    )
}

export default GameTweets
