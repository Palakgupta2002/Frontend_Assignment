import React, { useContext, useEffect, useState } from 'react';
import SongContext from '../SongContext';
import songs from '../Songs';
import SongElement from './SongElement';

const SongList = () => {
  const { songTitle, recentltPlayed } = useContext(SongContext);
  const [selectedTitleIndex, setSelectedTitleIndex] = useState("");
  const [songData, setSongData] = useState(songs);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (songTitle === "Recently Played") {
      setSongData(recentltPlayed);
    } else {
      setSongData(songs);
    }
  }, [songTitle, recentltPlayed]);

  // Function to filter songs based on search term
  const filteredSongs = songData.filter(song =>
    song.songName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.singerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='SongList'>
      <div className='songtitle'>{songTitle}</div>
      <div className='inputDiv'>
        <input
          type='text'
          placeholder='Search Songs, Artists'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className='searchButton'><img/></div>
      </div>
      <div className='songListElement'>
        {
          filteredSongs.map((ele, index) => (
            <div
              key={index}
              onClick={() => setSelectedTitleIndex(index)}
              style={{
                backgroundColor: selectedTitleIndex === index ? '#7c7676' : '',
                borderRadius: "8px"
              }}
            >
              <SongElement key={index} song={ele} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default SongList;
