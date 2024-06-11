import { combineReducers } from '@reduxjs/toolkit';
import { gameReducer } from '../slice/gameSlice';

const rootReducer = combineReducers({
  game: gameReducer,
});

export default rootReducer;
