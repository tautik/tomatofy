import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  audioRef,
  songs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
}) => {
  //State

  //Function

  const playEventHandler = () => {
    //play and pause function
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const getTime = (time) => {
    //for formating the time to mm:ss form.
    return Math.floor(time / 60) + ":" + Math.floor(time % 60);
  };

  //handling slider--making it dragable
  const dragHandler = (e) => {
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
    audioRef.current.currentTime = e.target.value;
    ///autoskip
    const autoSkip = () => {
      let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      if (audioRef.current.currentTime === songInfo.duration) {
        setCurrentSong(songs[currentIndex + 1]);
        return;
      }
    };
    autoSkip();
  };

  const skipTrackHandler = async (direction) => {
    //we find index of current song
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-fordward") {
      if (currentIndex + 1 === songs.length) {
        await setCurrentSong(songs[0]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[currentIndex + 1]);
      if (isPlaying) audioRef.current.play();
    }
    if (direction === "skip-back") {
      if (currentIndex - 1 === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }

      await setCurrentSong(songs[currentIndex - 1]);
      if (isPlaying) audioRef.current.play();
    }
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          onChange={dragHandler}
          min={0} //starting
          max={songInfo.duration || 0} //ending
          value={songInfo.currentTime} //slider moving according to duration
          type="range"
        />
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => skipTrackHandler("skip-back")}
        />
        <FontAwesomeIcon
          className="Play"
          onClick={playEventHandler}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-fordward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipTrackHandler("skip-fordward")}
        />
      </div>
    </div>
  );
};

export default Player;
