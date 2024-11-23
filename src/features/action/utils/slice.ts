import { createSlice } from '@reduxjs/toolkit';

const initialState: Array<{}> = [];

const watchLater = createSlice({
  name: 'watchLater',
  initialState,
  reducers: {
    addToWatchLater(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addToWatchLater } = watchLater.actions;

export default watchLater.reducer;
