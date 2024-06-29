import { useState } from "react";
import loader from "../assets/loader.svg";
import { Tweet } from "react-twitter-widgets";
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
        <Tweet
          tweetId={tweetId}
          onLoad={() => {
            setLoaded(true);
          }}
        />
      </div>
    </div>
  );
};

export default TwitterEmbedLoad;
