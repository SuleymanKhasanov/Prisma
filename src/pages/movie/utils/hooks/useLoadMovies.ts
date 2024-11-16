import { useEffect, useRef, useState } from 'react';
import usePopularMovies from '@/shared/hooks/usePopularMovies';

// Интерфейс для типа Movie (пример, адаптируйте под вашу структуру)
interface Movie {
  id: number;
  title: string;
  // добавьте другие поля, которые есть у фильма
}

const useLoadMovies = () => {
  const [page, setPage] = useState<number>(1);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  // Типизация данных, которые возвращает хук usePopularMovies
  const { popularMovies: newMovies, isLoading } =
    usePopularMovies(page);

  const movieContainerRef = useRef<HTMLDivElement | null>(null); // Типизация для ссылки на контейнер

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

  return { popularMovies, isLoading, movieContainerRef };
};

export default useLoadMovies;
