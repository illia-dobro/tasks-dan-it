import { createSlice } from '@reduxjs/toolkit';
import { type PayloadAction } from '@reduxjs/toolkit';

export type TimerState = {
  logs: string[];
  total: number;
};

const initialState: TimerState = {
  logs: [],
  total: 0,
};

export const timerSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    saveLog: (state, action: PayloadAction<string>) => {
      state.logs.push(action.payload + ` (${state.total} sec)`);
    },
    addTime: (state, action: PayloadAction<number>) => {
      state.total += action.payload;
    },
    clear: (state) => {
      (state.logs = []), (state.total = 0);
    },
  },
});

export const { saveLog, clear, addTime } = timerSlice.actions;

export default timerSlice.reducer;
