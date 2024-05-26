import React, { useContext } from 'react'
import Navbar from './Navbar'
import SongList from './SongList'
import SongMedia from './SongMedia'
import SongContext from '../SongContext'

const Home = () => {
    const {background}=useContext(SongContext)
  return (
    <div>
        <div className='app' style={{background}}>
        <Navbar />
        <SongList />
        <SongMedia />
      </div>
    </div>
  )
}

export default Home