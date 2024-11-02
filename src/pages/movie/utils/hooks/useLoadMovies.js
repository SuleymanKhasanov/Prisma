import { useEffect, useState, useRef } from 'react';
import usePopularMovies from '@/shared/hooks/usePopularMovies';

const useLoadMovies = () => {
  const [page, setPage] = useState(1);
  const [popularMovies, setPopularMovies] = useState([]);
  const { popularMovies: newMovies, isLoading } =
    usePopularMovies(page);
  const movieContainerRef = useRef(null);

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
    const handleScroll = () => {
      if (
        movieContainerRef.current &&
        movieContainerRef.current.scrollHeight -
          movieContainerRef.current.scrollTop <=
          movieContainerRef.current.clientHeight + 500 &&
        !isLoading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    const ref = movieContainerRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (ref) {
        ref.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isLoading]);

  return { popularMovies, isLoading, movieContainerRef };
};

export default useLoadMovies;
