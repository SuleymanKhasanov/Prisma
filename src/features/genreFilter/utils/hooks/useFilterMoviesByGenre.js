import { useState, useEffect } from 'react';
import { getMoviesByGenre } from '@/shared/api/api';
import { useSelector } from 'react-redux';

const useFilterMoviesByGenre = () => {
  const genreId = useSelector((state) => state.filter);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!genreId) return;
      setIsLoading(true);
      try {
        const fetchedMovies = await getMoviesByGenre(genreId, page);

        // Исключение фильмов с genre_id 16
        const filteredMovies = fetchedMovies.filter(
          (movie) => !movie.genre_ids.includes(16),
        );

        setMovies((prevMovies) => {
          const uniqueMovies = filteredMovies.filter(
            (newMovie) =>
              !prevMovies.some((movie) => movie.id === newMovie.id),
          );
          return [...prevMovies, ...uniqueMovies];
        });
      } catch (error) {
        console.error('Ошибка при загрузке фильмов:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [genreId, page]);

  useEffect(() => {
    setPage(1);
    setMovies([]);
  }, [genreId]);

  return { movies, isLoading, setPage };
};

export default useFilterMoviesByGenre;
