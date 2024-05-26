import React, { useContext, useState, useRef, useEffect } from 'react';
import SongContext from '../SongContext';
import previous from "../assest/Vector (1).png";
import play from "../assest/Vector (2).png";
import next from "../assest/Vector (3).png";
import speaker from "../assest/Vector (4).png";
import pause from "../assest/Frame 32.png";
import dots from "../assest/Vector.png";

const SongMedia = () => {
  const { currentSong,isPlaying, setIsPlaying,progress, setProgress,recentltPlayed,setrecentlyPlayed } = useContext(SongContext);
 
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [currentSong]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(progress);
  };

  const addMusicInRecentPalyed=()=>{
    setrecentlyPlayed([...recentltPlayed,currentSong])
    console.log(recentltPlayed,"hello recently Played")
    
  }

  return (
    <div className='songMedia'>
      <div>{currentSong.singerName}</div>
      <div className='imageDiv'>
        <img className='image' src={currentSong?.songImage} alt='songimage' />
      </div>
      <div className='progressBar'>
        <div className='progress' style={{ width: `${progress}%` }}></div>
      </div>
      <div className='audioControlComponents'>
        <div className='saveSong' onClick={addMusicInRecentPalyed} ><img src={dots} alt="" /></div>
        <div className='audioControl'>
          <div><img src={previous} alt="previous" /></div>
          <div onClick={handlePlayPause}>
            <img src={isPlaying ? pause : play} alt="play/pause" />
          </div>
          <div><img src={next} alt="next" /></div>
        </div>
        <div><img src={speaker} alt="speaker" /></div>
      </div>
      <audio ref={audioRef} src={currentSong.song} />
    </div>
  );
};

export default SongMedia;
