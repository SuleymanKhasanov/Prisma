import { configureStore } from '@reduxjs/toolkit';
import storiesReducer from '@/features/stories/storiesBanner/utils/slice';
import sliderControl from '@/widgets/sliders/utils/slice';
import filterByGanre from '@/features/genreFilter/utils/slice/slice';
import searchResults from '@/features/searchInput/utils/slice';

const store = configureStore({
  reducer: {
    stories: storiesReducer,
    slider: sliderControl,
    filter: filterByGanre,
    search: searchResults,
  },
});

export default store;
