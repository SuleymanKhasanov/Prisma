import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getWeekTranding = async () => {
  try {
    const response = await axios.get(`${BASE_URL}trending/all/week`, {
      params: {
        api_key: API_KEY,
        language: 'ru-RU',
      },
    });

    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getPopularMovies = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'ru-RU',
        page,
      },
    });

    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getPopularSeries = async () => {
  try {
    const response = await axios.get(`${BASE_URL}tv/popular`, {
      params: {
        api_key: API_KEY,
        language: 'ru-RU',
      },
    });

    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}movie/top_rated`, {
      params: {
        api_key: API_KEY,
        language: 'ru-RU',
      },
    });

    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getMovieTrailerInfo = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/videos`,
      {
        params: {
          api_key: API_KEY,
          language: 'ru-RU',
        },
      },
    );

    return response.data.results;
  } catch (error) {
    throw error;
  }
};
