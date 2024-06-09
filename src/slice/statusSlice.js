import { createSlice } from '@reduxjs/toolkit';

const statusSlice = createSlice({
  name: 'status',
  initialState: 'Start',
  reducers: {
    changeStatus(state) {
      const statusValues = {
        Start: 'Pause',
        Pause: 'Resume',
        Resume: 'Pause',
      };
      return statusValues[state];
    },
    restartStatus() {
      return 'Start';
    },
  },
});

export const { changeStatus, restartStatus } = statusSlice.actions;
export const statusReducer = statusSlice.reducer;
