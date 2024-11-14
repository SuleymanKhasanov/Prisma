import { useEffect, useRef, useState } from 'react';
import usePopularShows from '@/shared/hooks/usePopulerTvShows';

const useLoadMovies = () => {
  const [page, setPage] = useState(1);
  const [popularShows, setPopularShows] = useState([]);
  const { popularShows: newMovies, isLoading } =
    usePopularShows(page);
  const movieContainerRef = useRef(null);

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
    const handleScroll = (e) => {
      const target = e.target;
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
