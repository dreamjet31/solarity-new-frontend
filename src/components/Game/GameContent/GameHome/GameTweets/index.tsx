import React, { useEffect, useState } from "react";
import { apiCaller } from "utils/fetcher";

const GameTweets = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [tweets, setTweets] = useState([]);

  const getTweets = async () => {
    setLoading(true);
    try {
      const {
        data: { data: tweets },
      } = await apiCaller.get(`/games/${id}/tweets`);
      setTweets(tweets.slice(0, 3));
    } catch (err) {}
    setLoading(false);
  };

  useEffect(() => {
    getTweets();
  }, []);

  return (
    <div>
      <div className="text-white text-[25px] font-medium mb-2">Tweets</div>
      {loading ? (
        <div className="p-4 bg-slate-600 rounded-2xl text-white">
          Loading Tweets...
        </div>
      ) : (
        <div className=" grid grid-cols-3  gap-4 overflow-hidden">
          {tweets.map((data, index) => (
            <div
              key={data.id}
              className="  text-white gap-4 flex flex-col p-4 bg-[#13151F] rounded-md border border-slate-700 min-h-[200px]"
            >
              <div className="flex items-center gap-2">
                <div className="w-[50px] h-[50px]">
                  <img
                    src={data.profileImageUrl}
                    width={50}
                    height={50}
                    className="object-cover rounded-full overflow-hidden"
                  />
                </div>
                <div className="flex-1 flex gap-0 flex-col">
                  <span className="text-sm block">{data.userName}</span>
                  <span className="text-xs block text-slate-500">
                    @{data.handle}
                  </span>
                </div>
              </div>
              <div>
                <span className="text-md leading-0">{data.fullText}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GameTweets;
