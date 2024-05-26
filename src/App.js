// src/App.js
import './App.css';
import Navbar from './Components/Navbar';
import SongList from './Components/SongList';
import SongMedia from './Components/SongMedia';
import { SongProvider } from './SongContext';

function App() {
  return (
    <SongProvider>
      <div className='app'>
        <Navbar />
        <SongList />
        <SongMedia />
      </div>
    </SongProvider>
  );
}

export default App;
