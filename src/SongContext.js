
import React, { createContext, useState } from 'react';
import songs from './Songs';

const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [songTitle, setSongTitle] = useState("For You");
 
  const [currentSong,setCurrentSong]=useState(songs[0])
  const [background, setBackground] = useState(currentSong.posterBackgroundColor);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  return (
    <SongContext.Provider value={{songTitle, setSongTitle,currentSong,setCurrentSong,background, setBackground,isPlaying, setIsPlaying,progress, setProgress}}>
      {children}
    </SongContext.Provider>
  );
};

export default SongContext;
