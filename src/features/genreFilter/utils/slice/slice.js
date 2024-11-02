import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const filterByGanre = createSlice({
  name: 'filterByGanre',
  initialState,
  reducers: {
    filter: (state, action) => (state = action.payload),
  },
});

export const { filter } = filterByGanre.actions;
export default filterByGanre.reducer;
