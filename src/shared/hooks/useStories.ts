import { useEffect, useState } from 'react';
import { getMovieTrailerInfo, getPopularMovies } from '../api/api';

interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
}

interface Trailer {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}
interface MovieTrailer {
  movieId: number;
  trailer: Trailer;
}

const useStories = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [movieTrailers, setMovieTrailers] = useState<MovieTrailer[]>(
    [],
  );

  useEffect(() => {
    const fetchMoviesAndTrailers = async () => {
      try {
        const movies = await getPopularMovies();
        setPopularMovies(movies);

        const trailers = await Promise.all(
          movies.map(async (movie: Movie) => {
            const trailer = await getMovieTrailerInfo(movie.id);
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
