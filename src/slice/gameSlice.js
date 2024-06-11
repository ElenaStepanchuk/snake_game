import { createSlice } from '@reduxjs/toolkit';
import generatePosition from '../helpers/generatePosition/generatePosition';
import getRandomStyle from '../helpers/getRandomStyle/getRundomStyle';

const [posXS, posYS] = generatePosition();
const [posXF, posYF] = generatePosition();

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    status: 'Start',
    statusValues: {
      Start: 'Pause',
      Pause: 'Resume',
      Resume: 'Pause',
    },
    snake: [
      { x: posXS, y: posYS },
      { x: posXS + 1, y: posYS },
    ],
    snakeHead: { x: posXS + 1, y: posYS },
    snakeSize: 2,
    food: { x: posXF + 1, y: posYF },
    foodStyle: getRandomStyle(),
    points: 0,
    speed: 0,
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
    changeStatus(state) {
      state.status = state.statusValues[state.status];
    },
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
        switch (state.foodStyle) {
          case 1:
            state.points++;
            break;
          case 2:
            state.points += 5;
            break;
          case 3:
            state.points += 10;
            break;
          default:
            break;
        }
        state.foodStyle = getRandomStyle();
        if (state.points >= 50 && state.points % 50 === 0) {
          state.speed++;
        }
      }
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
  },
});

export const { changeStatus, moveSnake, saveKey, setDirection, checkFood, checkGameOver } =
  gameSlice.actions;
export const gameReducer = gameSlice.reducer;
