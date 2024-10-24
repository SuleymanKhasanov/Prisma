import { createSlice } from '@reduxjs/toolkit';

const storiesSlice = createSlice({
  name: 'stories',
  initialState: { currentStory: null },
  reducers: {
    show: (state, action) => {
      state.currentStory = action.payload;
    },
    hide: (state) => {
      state.currentStory = null;
    },
  },
});

export const { show: showStories, hide: hideStories } =
  storiesSlice.actions;

export default storiesSlice.reducer;
