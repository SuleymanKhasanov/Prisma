import { createSlice } from '@reduxjs/toolkit';

const initialState: Array<{}> = [];

const deleteMovie = createSlice({
  name: 'deleteMovie',
  initialState,
  reducers: {
    deleteMovieFromWatchLater(state, action) {
      state.push(action.payload);
    },
  },
});

export const { deleteMovieFromWatchLater } = deleteMovie.actions;
export default deleteMovie.reducer;
