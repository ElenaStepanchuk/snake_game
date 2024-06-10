import { createSlice } from '@reduxjs/toolkit';
import generatePosition from '../helpers/generatePosition/generatePosition';

const [posXS, posYS] = generatePosition();
const [posXF, posYF] = generatePosition();

const snakeSlice = createSlice({
  name: 'snake',
  initialState: {
    snake: [
      { x: posXS, y: posYS },
      { x: posXS + 1, y: posYS },
    ],
    snakeHead: { x: posXS + 1, y: posYS },
    snakeSize: 2,
    food: { x: posXF + 1, y: posYF },
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
    checkGameOver(state) {
      let { x, y } = state.snakeHead;
      let snakeHeadLess = state.snake.slice();
      snakeHeadLess.pop();
      let bitedPlace = null;
      bitedPlace = snakeHeadLess.find(s => s.x === x && s.y === y);
      if (bitedPlace) state.status = 'Restart';
    },
    saveKey(state, action) {
      for (let [a, b] of state.stopKeyCombinations) {
        if (a === state.direction && b === action.payload) return;
      }
      state.savedKey = action.payload;
    },
    setDirection(state) {
      state.direction = state.savedKey;
    },
    checkFood(state) {
      let { food, snakeHead, snake } = state;
      if (food.x === snakeHead.x && food.y === snakeHead.y) {
        let isOnSnake = null;
        do {
          food.x = Math.floor(Math.random() * 10);
          food.y = Math.floor(Math.random() * 10);
          isOnSnake = snake.find(s => s.x === food.x && s.y === food.y);
        } while (isOnSnake);

        state.food = food;
        state.snakeSize++;
      }
    },
  },
});

export const { moveSnake, checkGameOver, saveKey, setDirection, checkFood } = snakeSlice.actions;
export const snakeReducer = snakeSlice.reducer;
