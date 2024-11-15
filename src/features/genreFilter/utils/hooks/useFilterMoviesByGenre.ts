import { useState, useEffect } from 'react';
import { getMoviesByGenre } from '@/shared/api/api';
import { useSelector } from 'react-redux';

// Типизация фильмов
interface Movie {
  id: number;
  genre_ids: number[];
  // добавьте остальные поля фильма, если они вам нужны
}

const useFilterMoviesByGenre = () => {
  const genreId = useSelector(
    (state: { filter: number | null }) => state.filter,
  );
  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!genreId) return;

      setIsLoading(true);

      try {
        const fetchedMovies = await getMoviesByGenre(genreId, page);

        // Фильтрация фильмов и исключение жанра с id 16
        const filteredMovies = fetchedMovies.filter(
          (movie) => !movie.genre_ids.includes(16),
        );

        // Обновление списка фильмов, чтобы избежать дублирования
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

  // Очистка фильмов и сброс страницы при смене жанра
  useEffect(() => {
    setMovies([]);
    setPage(1);
  }, [genreId]);

  return { movies, isLoading, setPage };
};

export default useFilterMoviesByGenre;
