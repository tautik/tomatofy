import React from "react";
import LibrarySong from "./librarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2 className="library-head">Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            audioRef={audioRef}
            setCurrentSong={setCurrentSong} //used to change the current song
            song={song} //used to display song already there
            id={song.id}
            songs={songs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
