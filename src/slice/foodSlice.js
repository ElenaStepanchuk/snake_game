import { createSlice } from '@reduxjs/toolkit';
import generatePosition from '../helpers/generatePosition/generatePosition';

const [posXF, posYF] = generatePosition();

const foodSlice = createSlice({
  name: 'food',
  initialState: { x: posXF + 1, y: posYF },
  reducers: {
    repositionFood(state) {
      const [newX, newY] = generatePosition();
      state.x = newX;
      state.y = newY;
    },
  },
});

export const { repositionFood } = foodSlice.actions;
export const foodReducer = foodSlice.reducer;
