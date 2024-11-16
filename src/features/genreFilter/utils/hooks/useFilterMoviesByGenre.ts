import { useState, useEffect } from 'react';
import { getMoviesByGenre } from '@/shared/api/api';
import { useSelector } from 'react-redux';

// Типизация фильмов
interface Movie {
  id: number;
  genre_ids: number[];
  // добавьте остальные поля фильма, если они вам нужны
}

// Типизация состояния Redux (можно заменить на ваш конкретный тип)
interface RootState {
  filter: number | null;
}

const useFilterMoviesByGenre = () => {
  const genreId = useSelector((state: RootState) => state.filter);
  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!genreId) return;

      setIsLoading(true);

      try {
        // Явная типизация результата API
        const fetchedMovies: Movie[] = await getMoviesByGenre(
          genreId,
          page,
        );

        // Фильтрация фильмов, исключая жанр с id 16
        const filteredMovies = fetchedMovies.filter(
          (movie: Movie) => !movie.genre_ids.includes(16), // Типизация переменной movie
        );

        // Обновление состояния с уникальными фильмами
        setMovies((prevMovies) => {
          const uniqueMovies = filteredMovies.filter(
            (newMovie: Movie) =>
              !prevMovies.some(
                (movie: Movie) => movie.id === newMovie.id,
              ),
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
