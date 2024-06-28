import { useState } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import loader from "../assets/loader.svg";
interface Props {
  tweetId: string;
}
const TwitterEmbedLoad = ({ tweetId }: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full">
      {!loaded && (
        <div className="bg-white px-24 py-40 rounded-box">
          <img src={loader} alt="Loading..." />
        </div>
      )}
      <div>
        <TwitterTweetEmbed
          tweetId={tweetId}
          onLoad={() => {
            console.log("loaded");
            setLoaded(true);
          }}
        />
      </div>
    </div>
  );
};

export default TwitterEmbedLoad;
