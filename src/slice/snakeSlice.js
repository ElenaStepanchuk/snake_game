import { createSlice } from '@reduxjs/toolkit';
import generatePosition from '../helpers/generatePosition/generatePosition';

const [posXS, posYS] = generatePosition();

const snakeSlice = createSlice({
  name: 'snake',
  initialState: {
    snake: [
      { x: posXS, y: posYS },
      { x: posXS + 1, y: posYS },
    ],
    snakeHead: { x: posXS + 1, y: posYS },
    snakeSize: 2,
  },
  reducers: {
    moveSnake(state, action) {
      let { x, y } = state.head;
      switch (action.payload) {
        case 'ArrowRight':
          x = x >= 9 ? 0 : x + 1;
          break;
        case 'ArrowLeft':
          x = x <= 0 ? 9 : x - 1;
          break;
        case 'ArrowUp':
          y = y <= 0 ? 9 : y - 1;
          break;
        case 'ArrowDown':
          y = y >= 9 ? 0 : y + 1;
          break;
        default:
          break;
      }
      state.head = { x, y };
      state.body.push({ x, y });
      state.body = state.body.slice(-state.size);
    },
    growSnake(state) {
      state.size += 1;
    },
    restartSnake(state) {
      const [posXS, posYS] = generatePosition();
      state.body = [
        { x: posXS, y: posYS },
        { x: posXS + 1, y: posYS },
      ];
      state.head = { x: posXS + 1, y: posYS };
      state.size = 2;
    },
  },
});

export const { moveSnake, growSnake, restartSnake } = snakeSlice.actions;
export const snakeReducer = snakeSlice.reducer;
