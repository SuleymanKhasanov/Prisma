import { createSlice } from '@reduxjs/toolkit';

const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    autoplay: true,
    id: null,
    sectionName: '',
  },
  reducers: {
    sliderAutoplay(state, action) {
      state.autoplay = action.payload.autoplay;
      state.id = action.payload.id;
    },
    sliderStop(state, action) {
      state.autoplay = false;
      state.id = null;
      state.sectionName = action.payload.sectionName;
    },
  },
});

export const { sliderAutoplay, sliderStop } = sliderSlice.actions;
export default sliderSlice.reducer;
