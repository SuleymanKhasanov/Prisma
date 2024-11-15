import { useEffect, useState } from 'react';
import { getMovieTrailerInfo, getPopularMovies } from '../api/api';

// Тип для фильма
interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  // Дополнительные поля фильма, если нужно
}

// Тип для трейлера
interface Trailer {
  url: string; // Примерное поле, может быть изменено в зависимости от структуры ответа от API
  // Дополнительные поля трейлера
}

// Тип для трейлера фильма
interface MovieTrailer {
  movieId: number;
  trailer: Trailer | null; // В случае, если трейлер не найден
}

// Тип для возвращаемого значения хука
interface UseStoriesReturn {
  popularMovies: Movie[];
  movieTrailers: MovieTrailer[];
}

const useStories = (): UseStoriesReturn => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]); // Типизируем состояние как массив фильмов
  const [movieTrailers, setMovieTrailers] = useState<MovieTrailer[]>(
    [],
  ); // Типизируем состояние как массив трейлеров

  useEffect(() => {
    const fetchMoviesAndTrailers = async () => {
      try {
        const movies = await getPopularMovies(); // Типизируем результат как массив Movie
        setPopularMovies(movies);

        const trailers = await Promise.all(
          movies.map(async (movie) => {
            const trailer = await getMovieTrailerInfo(movie.id); // Типизируем результат как Trailer или null
            return { movieId: movie.id, trailer };
          }),
        );

        setMovieTrailers(trailers);
      } catch (error) {
        console.error('Error fetching movies or trailers:', error);
      }
    };

    fetchMoviesAndTrailers();
  }, []);

  return { popularMovies, movieTrailers };
};

export default useStories;
