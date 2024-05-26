import React, { useContext, useEffect, useState } from 'react';
import SongContext from '../SongContext';
import songs from '../Songs';
import SongElement from './SongElement';


const SongList = () => {
  const { songTitle,recentltPlayed} = useContext(SongContext);
  const [selectedTitleIndex, setSelectedTitleIndex] = useState("");
  const [songData,setSongData]=useState(songs)

  useEffect(() => {
    if (songTitle === "Recently Played") {
      setSongData(recentltPlayed);
    } else {
      setSongData(songs);
    }
  }, [songTitle, recentltPlayed]);

  return (
    <div className='SongList'>
      <div className='songtitle'>{songTitle}</div>
      <div className='inputDiv'><input type='text' placeholder='Search Songs,Artists' />
      <div className='searchButton'><img/></div>
      </div>
      <div className='songListElement'>
        {
            songData?.map((ele,index)=>(
              <div onClick={()=>setSelectedTitleIndex(index)} style={{ backgroundColor: selectedTitleIndex === index ? '#7c7676' : '',borderRdius:"8px"}}>
                <SongElement  key={index} song={ele} /> 
              </div> 
        ))
        }
      </div>
    </div>
  );
}

export default SongList;
