import { createSlice } from '@reduxjs/toolkit';

const directionSlice = createSlice({
  name: 'direction',
  initialState: {
    direction: 'ArrowRight',
    stopKeyCombinations: [
      ['ArrowUp', 'ArrowDown'],
      ['ArrowDown', 'ArrowUp'],
      ['ArrowLeft', 'ArrowRight'],
      ['ArrowRight', 'ArrowLeft'],
    ],
    savedKey: 'ArrowRight',
  },

  reducers: {
    moveSnake(state) {
      if (state.status === 'Restart') return;
      let { x, y } = state.snakeHead;
      switch (state.direction) {
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
      state.snakeHead = { x, y };
      state.snake.push({ x, y });
      state.snake = state.snake.slice(-state.snakeSize);
    },
    setDirection(state) {
      state.direction = state.savedKey;
    },
  },
});

export const { setDirection } = directionSlice.actions;
export const directionReducer = directionSlice.reducer;
