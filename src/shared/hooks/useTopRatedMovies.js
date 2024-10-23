import { useEffect, useState } from 'react';
import { getTopRatedMovies } from '../api/api';

const useTopRatedMovies = () => {
  const [topMovies, setTopMovies] = useState([]);
  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const topFilms = await getTopRatedMovies();
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
