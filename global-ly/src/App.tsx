import "./index.css";
import Popup from "./components/Popup";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Artist {
  Name: string;
  Hometown: string;
  Story: string;
  TweetID1: string;
  TweetID2: string;
  TweetID3: string;
  photoURL: string;
}

function App() {
  const [randomArtist, setRandomArtist] = useState<Artist | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://sheetdb.io/api/v1/ltzkg4ybfkue2");
      const data: Artist[] = await response.json();

      const randomIndex = Math.floor(Math.random() * data.length);
      const selectedObject = data[randomIndex];

      setRandomArtist(selectedObject);
    } catch (error) {
      console.error("Error fetching the data:", error);
    }
  };

  const handleGenerateArtist = () => {
    fetchData();
  };

  const [buttonPopup, setButtonPopup] = useState(false);

  const artist = {
    name: randomArtist?.Name || "",
    hometown: randomArtist?.Hometown || "",
    story: randomArtist?.Story || "",
    tweetID1: randomArtist?.TweetID1 || "",
    tweetID2: randomArtist?.TweetID2 || "",
    tweetID3: randomArtist?.TweetID3 || "",
    photoURL: randomArtist?.photoURL || "",
  };

  return (
    <div className="App">
      <main>
        <h1>Welcome!</h1>
        <br></br>
        <br></br>
        <br></br>
        <button
          onClick={() => {
            handleGenerateArtist();
            setButtonPopup(true);
          }}
          className={"btn btn-success"}
        >
          Generate Artist
        </button>
      </main>
      <Popup
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        artist={artist}
      ></Popup>
    </div>
  );
}

export default App;
