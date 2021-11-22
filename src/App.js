import React, { useState, audioRef, useRef } from "react";
//Components
import "./styles/app.scss";
import Player from "./components/player";
import Song from "./components/song";
import Library from "./components/library";
import Nav from "./components/nav";
//Data
import data from "./data";

function App() {
  //AUDIO FILES
  const audioRef = useRef(null); // The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue);
  // Here making audio tag to be able to use here.

  const timeUpdateHandler = (e) => {
    //used to update songInfo state
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ currentTime: current, duration: duration });
    console.log(e.target);
  };

  //states
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        setCurrentSong={setCurrentSong}
        songs={songs}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        songs={songs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        libraryStatus={libraryStatus}
      />
      <audio
        ref={audioRef}
        onLoadedMetadata={timeUpdateHandler} // Execute a JavaScript when meta data for a video is loaded:
        // The onloadedmetadata event occurs when meta data for the specified audio/video has been loaded.
        onTimeUpdate={timeUpdateHandler} //The ontimeupdate event occurs when the playing position of an audio/video has changed.Thus every time the time changes in audio..keyword runs
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
