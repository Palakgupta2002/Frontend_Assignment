import React, { useContext, useState, useRef, useEffect } from 'react';
import SongContext from '../SongContext';
import previous from "../assest/Vector (1).png";
import play from "../assest/Vector (2).png";
import next from "../assest/Vector (3).png";
import speaker from "../assest/Vector (4).png";
import pause from "../assest/Frame 32.png";
import dots from "../assest/Vector.png";
import {Popover } from 'antd';

const SongMedia = () => {
  const { currentSong, isPlaying, setIsPlaying, progress, setProgress} = useContext(SongContext);
  const [open, setOpen] = useState(false);
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


  const addMusicInRecentPalyed = () => {
   const addYourFav= JSON.parse(localStorage.getItem("MyFavSongs"))||[]
    const updatedFav = [...addYourFav,currentSong];
    localStorage.setItem("MyFavSongs", JSON.stringify(updatedFav));
    
  }
  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <div className='songMedia'>
      <div className='songname'>{currentSong.songName}</div>
      <div>{currentSong.singerName}</div>
      <div className='imageDiv'>
        <img className='image' src={currentSong?.songImage} alt='songimage' />
      </div>
      <div className='progressBar'>
        <div className='progress' style={{ width: `${progress}%` }}></div>
      </div>
      <div className='audioControlComponents'>
        <Popover
          content={<a onClick={hide}>Add Your Fav</a>}
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
        >
          <div className='saveSong' onClick={addMusicInRecentPalyed} ><img src={dots} alt="" /></div>
        </Popover>

        <div className='audioControl'>
          <div><img src={previous} alt="previous" /></div>
          <div onClick={handlePlayPause}>
            <img width={"32px"} src={isPlaying ? pause : play} alt="play/pause" />
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
