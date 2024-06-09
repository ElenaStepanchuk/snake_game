import { createSlice } from '@reduxjs/toolkit';

const directionSlice = createSlice({
  name: 'direction',
  initialState: 'ArrowRight',
  reducers: {
    setDirection(state, action) {
      return action.payload;
    },
  },
});

export const { setDirection } = directionSlice.actions;
export const directionReducer = directionSlice.reducer;
