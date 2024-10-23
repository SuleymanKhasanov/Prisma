import { configureStore } from '@reduxjs/toolkit';
import storiesReducer from '@/features/stories/storiesBanner/utils/slice'; // Подключаем редьюсер

const store = configureStore({
  reducer: {
    stories: storiesReducer, // Правильное подключение редьюсера
  },
});

export default store;
