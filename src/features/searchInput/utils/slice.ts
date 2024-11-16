import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchResult {
  id: number;
  title?: string;
  name?: string;
  vote_average: number;
  genre_ids: number[];
  release_date: string;
  media_type: string;
  backdrop_path: string;
}

const initialState: SearchResult[] = [];

const searchResults = createSlice({
  name: 'search',
  initialState,
  reducers: {
    // Диспатчим результаты поиска
    searchData: (state, action: PayloadAction<SearchResult[]>) => {
      return action.payload;
    },
  },
});

export const { searchData } = searchResults.actions;
export default searchResults.reducer;
