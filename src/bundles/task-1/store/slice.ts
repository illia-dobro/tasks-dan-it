import { createSlice } from '@reduxjs/toolkit'
import { type PayloadAction } from '@reduxjs/toolkit'

export type TimerState = {
  log: string[];
  total: number
}

const initialState: TimerState = {
  log: [],
  total: 0
}


export const timerSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    saveLog: (state, action: PayloadAction<string>) => {
      state.log.push(action.payload)
    },
    clear: (state) => {
      state.log = [],
      state.total = 0
    }
  },
})

export const { saveLog, clear } = timerSlice.actions

export default timerSlice.reducer