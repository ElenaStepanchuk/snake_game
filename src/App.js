import Enter from './components/enter/Enter';

import './App.css';
import AllUsersList from '../src/components/allUsersList/AllUsersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Snake game</h1>
      </header>
      <Enter />
      <AllUsersList />
    </div>
  );
}

export default App;
