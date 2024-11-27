import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getCasts: builder.query({
      query: ({ media_type, id }) =>
        `${media_type}/${id}/credits?api_key=${API_KEY}&language=ru-RU`,
    }),
  }),
});

export const { useGetCastsQuery } = apiSlice;
