import { useEffect, useRef, useState } from 'react';
import usePopularShows from '@/shared/hooks/usePopulerTvShows';

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

const useLoadMovies = () => {
  const [page, setPage] = useState<number>(1);
  const [popularShows, setPopularShows] = useState<Movie[]>([]);
  const { popularShows: newMovies, isLoading } =
    usePopularShows(page);

  const movieContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setPopularShows((prevMovies) => {
      const uniqueMovies = newMovies.filter(
        (newMovie) =>
          !prevMovies.some((movie) => movie.id === newMovie.id),
      );
      return [...prevMovies, ...uniqueMovies];
    });
  }, [newMovies]);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      // Используем общий тип Event
      const target = e.target as HTMLElement;
      if (
        target.scrollHeight - target.scrollTop <=
          target.clientHeight + 500 &&
        !isLoading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    const container = movieContainerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () =>
      container?.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return { popularShows, isLoading, movieContainerRef };
};

export default useLoadMovies;
