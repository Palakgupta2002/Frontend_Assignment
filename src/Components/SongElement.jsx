import React, { useContext, useState } from 'react';
import SongContext from '../SongContext';

const SongElement = ({ song }) => {
  const {setCurrentSong,setBackground,setProgress,setIsPlaying} = useContext(SongContext);
  const recentltyPlayed= JSON.parse(localStorage.getItem("recentltyPlayed"))||[]
  const seCurrentSongFun=()=>{
    setCurrentSong(song)
    setBackground(song.posterBackgroundColor)
    setProgress(0)
    setIsPlaying(false)
    addRecentlyPlayedSong(song)
  }
  
  const addRecentlyPlayedSong = (song) => {
    const recentlyPlayed = JSON.parse(localStorage.getItem("recentlyPlayed")) || [];
    const updatedRecentlyPlayed = [...recentlyPlayed, song].slice(0, 10);
    localStorage.setItem("recentlyPlayed", JSON.stringify(updatedRecentlyPlayed));
  };
  

  return (
    <div className='songElement' onClick={seCurrentSongFun}>
      <div className='songDetails'>
        <div><img className='songPoster' width={"40px"} src={song.songImage} /></div>
        <div>
          <div>{song.singerName}</div>
          <div>{song.songName}</div>
        </div>
      </div>
      <div>{song.duration}</div>
    </div>
  );
};

export default SongElement;
