
import React, { createContext, useState } from 'react';

const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [songTitle, setSongTitle] = useState("For You");
  const [recentltPlayed,setrecentlyPlayed]=useState([])
  
  return (
    <SongContext.Provider value={{songTitle, setSongTitle,recentltPlayed,setrecentlyPlayed}}>
      {children}
    </SongContext.Provider>
  );
};

export default SongContext;
