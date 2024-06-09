import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { configureStore } from '@reduxjs/toolkit';
// import { gameReducer } from './store/gameSlice';
import { Provider } from 'react-redux';
import store from './store/store';
// import './App.css';

// const store = configureStore({
//   reducer: {
//     game: gameReducer,
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
