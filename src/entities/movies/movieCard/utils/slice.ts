import { createSlice } from '@reduxjs/toolkit';

const initialState: Array<{}> = [];

const currentMovie = createSlice({
  name: 'currentMovie',
  initialState,
  reducers: {
    watchCurrentMovie(state, action) {
      state.push(action.payload);
    },
  },
});

export const { watchCurrentMovie } = currentMovie.actions;

export default currentMovie.reducer;
