import { useState, useEffect } from 'react';
import { getMoviesByGenre } from '@/shared/api/api';

const useFilterMoviesByGenre = () => {
  const [genreId, setGenreId] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (genreId) {
        try {
          const fetchedMovies = await getMoviesByGenre(genreId);
          setMovies(fetchedMovies);
        } catch (error) {
          console.error('Ошибка при загрузке фильмов:', error);
        }
      } else {
        setMovies([]);
      }
    };
    fetchMovies();
  }, [genreId]);

  return { movies, setGenreId };
};

export default useFilterMoviesByGenre;
