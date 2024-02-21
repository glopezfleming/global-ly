import "./Popup.css";
import { Tweet } from "react-tweet";

interface Artist {
  name: string;
  hometown: string;
  story: string;
  tweetID1: string;
  tweetID2: string;
  tweetID3: string;
  photoURL: string;
}

interface Props {
  trigger: boolean;
  setTrigger: (trigger2: boolean) => void;
  imageSrc?: string; //add image as an optional prop
  artist: Artist;
}

const Popup = ({ trigger, setTrigger, artist }: Props) => {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setTrigger(false)}>
          close
        </button>
        <h3>{artist.name}</h3>
        <p>{artist.hometown}</p>
        <img
          className="artist-img"
          src={artist.photoURL}
          alt="tyler the creator"
        ></img>
        <br></br>
        <p>{artist.story}</p>
        <div className="tweet-container">
          <Tweet id={artist.tweetID1} />
          <Tweet id={artist.tweetID2} />
          <Tweet id={artist.tweetID3} />
        </div>
      </div>
    </div>
  ) : null;
};

export default Popup;
