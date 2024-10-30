// sliderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    autoplay: true,
    id: null,
  },
  reducers: {
    sliderAutoplay(state, action) {
      state.autoplay = action.payload.autoplay;
      state.id = action.payload.id;
    },
    sliderStop(state) {
      state.autoplay = false;
      state.id = null;
    },
  },
});

export const { sliderAutoplay, sliderStop } = sliderSlice.actions;
export default sliderSlice.reducer;
