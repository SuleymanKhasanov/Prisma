import { useEffect, useState } from 'react';
import { getMovieTrailerInfo, getPopularMovies } from '../api/api';

// Тип для фильма
interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  backdrop_path: string;
}

// Тип для трейлера
interface Trailer {
  key: string; // Пример: уникальный идентификатор трейлера
  name: string; // Пример: название трейлера
}

// Тип для трейлеров фильма
interface MovieTrailer {
  movieId: number;
  trailer: Trailer | null; // Трейлер может быть null
}

// Тип для возвращаемого значения хука
interface UseStoriesReturn {
  popularMovies: Movie[];
  movieTrailers: {
    movieId: number;
    trailer: ITrailersData[] | null; // Преобразуем трейлер в правильный формат
  }[];
}

// Пример получения данных для ITrailersData
interface ITrailersData {
  id: string;
  key: string;
  name: string;
}

const useStories = (): UseStoriesReturn => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [movieTrailers, setMovieTrailers] = useState<
    { movieId: number; trailer: ITrailersData[] | null }[]
  >([]);

  useEffect(() => {
    const fetchMoviesAndTrailers = async () => {
      try {
        const movies = await getPopularMovies();
        setPopularMovies(movies);

        const trailers = await Promise.all(
          movies.map(async (movie: Movie) => {
            const trailer = await getMovieTrailerInfo(movie.id);

            // Преобразование Trailer | null в ITrailersData[] | null
            const formattedTrailer =
              trailer && Array.isArray(trailer)
                ? trailer.map((t: Trailer) => ({
                    id: `${movie.id}-${t.key}`, // Генерируем уникальный id
                    key: t.key,
                    name: t.name,
                  }))
                : null;

            return { movieId: movie.id, trailer: formattedTrailer };
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
