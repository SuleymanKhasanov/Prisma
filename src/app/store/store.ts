import { configureStore } from '@reduxjs/toolkit';
import storiesReducer from '@/features/stories/storiesBanner/utils/slice';
import sliderControl from '@/widgets/sliders/utils/slice';
import filterByGenre from '@/features/genres/genreFilter/utils/slice/slice';
import searchResults from '@/features/searchInput/utils/slice';
import watchLater from '@/features/action/utils/slice';
import deleteMovie from '@/features/action/utils/sliceDeleteMovie';
import currentMovie from '@/entities/movies/movieCard/utils/slice';
import { apiSlice } from '@/shared/api/apiSlice';

const store = configureStore({
  reducer: {
    stories: storiesReducer,
    slider: sliderControl,
    filter: filterByGenre,
    search: searchResults,
    watchLater,
    deleteMovie,
    currentMovie,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>; // Тип состояния
export default store;
