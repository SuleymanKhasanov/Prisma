import { useEffect, useState } from 'react';
import { getPopularMovies } from '../api/api';

const usePopularMovies = (page) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const movies = await getPopularMovies(page);

        const filteredMovies = movies.filter(
          (movie) => !movie.genre_ids.includes(16),
        );
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

export default usePopularMovies;
