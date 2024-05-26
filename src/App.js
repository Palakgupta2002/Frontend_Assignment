// src/App.js
import './App.css';
import Home from './Components/Home';
import { SongProvider } from './SongContext';

function App() {
  return (
    <SongProvider>
     <Home/>
    </SongProvider>
  );
}

export default App;
