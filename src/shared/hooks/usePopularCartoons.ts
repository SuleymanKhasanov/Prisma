import { useEffect, useState } from 'react';
import { getPopularMovies } from '../api/api';

// Типы для фильма
interface Movie {
  id: number;
  title?: string;
  name?: string;
  vote_average: number;
  poster_path: string;
  genre_ids: number[];
  release_date: string;
  media_type: string;
}

// Тип для возвращаемого значения хука
interface UsePopularMoviesReturn {
  popularMovies: Movie[];
  isLoading: boolean;
}

const usePopularCartoons = (page: number): UsePopularMoviesReturn => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]); // Типизируем состояние как массив фильмов
  const [isLoading, setIsLoading] = useState<boolean>(false); // Типизируем состояние как булево значение

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const movies: Movie[] = await getPopularMovies(page); // Типизируем результат API-запроса

        // Фильтруем фильмы
        const filteredMovies = movies.filter((movie) =>
          movie.genre_ids.includes(16),
        );

        // Обновляем состояние фильмов, исключая дубликаты
        setPopularMovies((prevMovies) => {
          const uniqueMovies = filteredMovies.filter(
            (newMovie) =>
              !prevMovies.some((movie) => movie.id === newMovie.id),
          );
          return [...prevMovies, ...uniqueMovies];
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [page]);

  return { popularMovies, isLoading };
};

export default usePopularCartoons;
