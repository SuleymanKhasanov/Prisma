import { configureStore } from '@reduxjs/toolkit';
import storiesReducer from '@/features/stories/storiesBanner/utils/slice';
import sliderControl from '@/widgets/sliders/utils/slice';
import filterByGenre from '@/features/genres/genreFilter/utils/slice/slice';
import searchResults from '@/features/searchInput/utils/slice';
import watchLater from '@/features/action/utils/slice';
import deleteMovie from '@/features/action/utils/sliceDeleteMovie';
import currentMovie from '@/entities/movies/movieCard/utils/slice';

const store = configureStore({
  reducer: {
    stories: storiesReducer,
    slider: sliderControl,
    filter: filterByGenre,
    search: searchResults,
    watchLater,
    deleteMovie,
    currentMovie,
  },
});

export default store;
