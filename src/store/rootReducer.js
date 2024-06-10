import { combineReducers } from '@reduxjs/toolkit';
import { statusReducer } from '../slice/statusSlice';
import { snakeReducer } from '../slice/snakeSlice';
// import { foodReducer } from '../slice/foodSlice';

const rootReducer = combineReducers({
  status: statusReducer,
  snake: snakeReducer,
  // food: foodReducer,
});

export default rootReducer;
