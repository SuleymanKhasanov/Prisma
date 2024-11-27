import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Movie = {
  id: number;
  media_type: string;
};

const initialState: Movie[] = [];

const currentMovie = createSlice({
  name: 'currentMovie',
  initialState,
  reducers: {
    watchCurrentMovie(state, action: PayloadAction<Movie>) {
      state.push(action.payload);
    },
  },
});

export const { watchCurrentMovie } = currentMovie.actions;

export default currentMovie.reducer;
