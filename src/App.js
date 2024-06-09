import Enter from './components/enter/Enter';

import './App.css';
import AllUsersList from '../src/components/allUsersList/AllUsersList';
import Game from './components/game/Game';
import { useEffect, useState } from 'react';

function App() {
  const [start, setStart] = useState(false)
  const gameStart = localStorage.getItem("game");
  useEffect(() => {
    setStart(gameStart)  
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Snake game</h1>
      </header>
      {!start ? (<><Enter />
      <AllUsersList /></>) :
       <Game />}
    </div>
  );
}

export default App;
