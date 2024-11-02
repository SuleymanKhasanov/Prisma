import { configureStore } from '@reduxjs/toolkit';
import storiesReducer from '@/features/stories/storiesBanner/utils/slice';
import sliderControl from '@/widgets/sliders/utils/slice';
import filterByGanre from '@/features/genreFilter/utils/slice/slice';

const store = configureStore({
  reducer: {
    stories: storiesReducer,
    slider: sliderControl,
    filter: filterByGanre,
  },
});

export default store;
