import { useEffect, useState } from 'react';
import { getTopRatedMovies } from '../api/api';

// Тип для фильма
interface Movie {
  id: number;
  title: string;
  genre_ids: number[];
  name?: string;
  vote_average?: number;
  poster_path?: string;
  release_date?: string;
  media_type?: string;
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
