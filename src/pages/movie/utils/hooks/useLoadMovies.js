import { useEffect, useState } from 'react';
import usePopularMovies from '@/shared/hooks/usePopularMovies';

const useLoadMovies = () => {
  const [page, setPage] = useState(1);
  const [popularMovies, setPopularMovies] = useState([]);
  const { popularMovies: newMovies, isLoading } =
    usePopularMovies(page);

  useEffect(() => {
    setPopularMovies((prevMovies) => {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return { popularMovies, isLoading };
};

export default useLoadMovies;
