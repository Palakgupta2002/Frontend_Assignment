import React, { useContext, useState } from 'react';
import spotifyClone from '../assest/Spotify-logo.png';
import SongContext from '../SongContext';
import girlImage from "../assest/girl.jpg"

const Navbar = () => {
    const { setSongTitle } = useContext(SongContext);
    const songTitleList = [
        "For You",
        "Top Tracks",
        "Favourites",
        "Recently Played"
    ];

    const [selectedTitleIndex, setSelectedTitleIndex] = useState(0);

    const setSongTitleFun = (index) => {
        setSelectedTitleIndex(index);
        setSongTitle(songTitleList[index]);
    }

    return (
        <div className='navbarMain'>
            <div className='navbarContent'>
                <div>
                    <div>
                        <img className='spotifyImage' src={spotifyClone} alt='spotifyCloneImage' />
                    </div>
                    {songTitleList.map((title, index) => (
                        <div key={index} className='songCoverTittleName'>
                            <p
                                onClick={() => setSongTitleFun(index)}
                                style={{ color: selectedTitleIndex === index ? 'white' : 'black' }}
                            >
                                {title}
                            </p>
                        </div>
                    ))}
                </div>
                <div className='profile'>
                    <img className='profilePoster' src={girlImage}/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
