// import Enter from './components/enter/Enter';
import { useDispatch } from 'react-redux';
import { saveKey } from './store/gameSlice';

import './App.css';
import Board from './components/board/Board';
import Status from './components/status/Status';
// import AllUsersList from '../src/components/allUsersList/AllUsersList';
// import Game from './components/game/Game';
// import { useEffect, useState } from 'react';

function App() {
  // const [start, setStart] = useState(false);
  // const gameStart = localStorage.getItem('game');
  // useEffect(() => {
  //   setStart(gameStart);
  // }, [gameStart]);

  const dispatch = useDispatch();

  const keyDownHandler = e => {
    dispatch(saveKey(e.key));
  };
  return (
    <div className="App" onKeyDownCapture={keyDownHandler}>
      <header className="App-header">
        <h1>Snake game</h1>
      </header>
      <Board />
      <Status />
      {/* 
      {!start ? (
        <>
          <Enter />
          <AllUsersList />
        </>
      ) : (
        <Game />
      )} */}
    </div>
  );
}

export default App;
