import { useEffect, useState } from 'react';
import { getPopularSeries } from '../api/api';

const usePopularShows = (page: number) => {
  interface Movie {
    id: number;
    genre_ids: number[];
    title: string;
  }

  const [popularShows, setPopularShows] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPopularSeries = async () => {
      setIsLoading(true);
      try {
        const popularSeriesTV: Movie[] = await getPopularSeries(page);

        const filteredShows = popularSeriesTV.filter(
          (movie) => !movie.genre_ids.includes(16),
        );

        setPopularShows((prevMovies) => {
          const uniqueMovies = filteredShows.filter(
            (newMovie) =>
              !prevMovies.some((movie) => movie.id === newMovie.id),
          );
          return [...prevMovies, ...uniqueMovies];
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopularSeries();
  }, [page]);

  return { popularShows, isLoading };
};

export default usePopularShows;
