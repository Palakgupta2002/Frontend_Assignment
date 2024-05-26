import React, { useContext, useState } from 'react';
import SongContext from '../SongContext';

const SongElement = ({ song }) => {
  const {setCurrentSong,setBackground,setProgress,setIsPlaying,} = useContext(SongContext);
  const seCurrentSongFun=()=>{
    setCurrentSong(song)
    setBackground(song.posterBackgroundColor)
    setProgress(0)
    setIsPlaying(false)
  }

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
