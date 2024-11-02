import { useState, useEffect } from 'react';
import { getMoviesByGenre } from '@/shared/api/api';
import { useSelector } from 'react-redux';

const useFilterMoviesByGenre = () => {
  const genreId = useSelector((state) => state.filter);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!genreId) return;
      try {
        const fetchedMovies = await getMoviesByGenre(genreId);
        setMovies(fetchedMovies);
      } catch (error) {
        console.error('Ошибка при загрузке фильмов:', error);
      }
    };

    fetchMovies();
  }, [genreId]);

  return movies;
};

export default useFilterMoviesByGenre;
