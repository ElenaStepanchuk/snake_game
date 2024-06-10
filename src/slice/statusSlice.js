import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'Start',
  statusValues: {
    Start: 'Pause',
    Pause: 'Resume',
    Resume: 'Pause',
  },
};

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    changeStatus(state) {
      state.status = state.statusValues[state.status];
    },
  },
});

export const { changeStatus } = statusSlice.actions;
export const statusReducer = statusSlice.reducer;
