import { useEffect, useState } from 'react';
import { getTopRatedMovies } from '../api/api';

// Тип для фильма
interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  // Другие поля фильма, которые возвращаются от API, можно добавить сюда
}

const useTopRatedMovies = (): Movie[] => {
  const [topMovies, setTopMovies] = useState<Movie[]>([]); // Типизируем состояние как массив Movie

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const topFilms = await getTopRatedMovies(); // Типизируем ответ как Movie[]
        setTopMovies(topFilms);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  return topMovies;
};

export default useTopRatedMovies;
