import React, { useContext } from 'react';
import SongContext from '../SongContext';

const SongList = () => {
  const { songTitle } = useContext(SongContext);

  return (
    <div>
      <div>{songTitle}</div>
      <div>searchbar</div>
      <div>songList</div>
    </div>
  );
}

export default SongList;
