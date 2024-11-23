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

export const getPopularSeries = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}tv/popular`, {
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

export const getMovieTrailerInfo = async (movieId: number) => {
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

export const getMoviesByGenre = async (
  genreId: number,
  page: number = 1,
) => {
  try {
    const response = await axios.get(`${BASE_URL}discover/movie`, {
      params: {
        api_key: API_KEY,
        language: 'ru-RU',
        with_genres: String(genreId),
        page,
      },
    });

    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getSeriesByGenre = async (genreId: number, page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}discover/tv`, {
      params: {
        api_key: API_KEY,
        language: 'ru-RU',
        with_genres: String(genreId),
        page,
      },
    });

    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getSearchMovieByTitle = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}search/multi`, {
      params: {
        api_key: API_KEY,
        language: 'ru-RU',
        query,
      },
    });

    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getMovieById = async (
  media_type: string,
  movieId: number,
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}${media_type}/${movieId}`,
      {
        params: {
          api_key: API_KEY,
          language: 'ru-RU',
        },
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
