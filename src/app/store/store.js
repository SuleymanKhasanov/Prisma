import { configureStore } from '@reduxjs/toolkit';
import storiesReducer from '@/features/stories/storiesBanner/utils/slice';
import sliderControl from '@/widgets/sliders/utils/slice';

const store = configureStore({
  reducer: {
    stories: storiesReducer,
    slider: sliderControl,
  },
});

export default store;
