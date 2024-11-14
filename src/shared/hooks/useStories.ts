import { useEffect, useState } from 'react';
import { getMovieTrailerInfo, getPopularMovies } from '../api/api';

const useStories = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [movieTrailers, setMovieTrailers] = useState([]);

  useEffect(() => {
    const fetchMoviesAndTrailers = async () => {
      try {
        const movies = await getPopularMovies();
        setPopularMovies(movies);

        const trailers = await Promise.all(
          movies.map(async (movie) => {
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
