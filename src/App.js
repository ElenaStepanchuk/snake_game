import Enter from './components/enter/Enter';
import { useDispatch, useSelector } from 'react-redux';
import { saveKey } from './slice/gameSlice';

import './App.css';
import Board from './components/board/Board';
import Status from './components/status/Status';
import AllUsersList from '../src/components/allUsersList/AllUsersList';

function App() {
  const dispatch = useDispatch();
  const play = useSelector(store => store.game.play);
  console.log('play:', play);

  const keyDownHandler = e => {
    dispatch(saveKey(e.key));
  };
  return (
    <div className="App" onKeyDownCapture={keyDownHandler}>
      <header className="App-header">
        <h1>Snake game</h1>
      </header>
      {play ? (
        <>
          <Board />
          <Status />
        </>
      ) : (
        <>
          <Enter />
          <AllUsersList />
        </>
      )}
    </div>
  );
}

export default App;
