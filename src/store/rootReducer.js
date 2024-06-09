import { combineReducers } from '@reduxjs/toolkit';
import { statusReducer } from '../slice/statusSlice';
import { snakeReducer } from '../slice/snakeSlice';
import { foodReducer } from '../slice/foodSlice';
import { directionReducer } from '../slice/directionSlice';

const rootReducer = combineReducers({
  status: statusReducer,
  snake: snakeReducer,
  food: foodReducer,
  direction: directionReducer,
});

export default rootReducer;
