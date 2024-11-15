import { useState, useEffect } from 'react';
import { getWeekTranding } from '../api/api';

// Тип для трендового объекта
interface Trending {
  id: number;
  title: string;
  media_type: string; // Например, может быть 'movie' или 'tv'
  // Можно добавить другие поля, которые возвращаются из API (например, `poster_path`, `release_date`, и т.д.)
}

const useWeekTrending = (): Trending[] => {
  const [weekTrending, setWeekTrending] = useState<Trending[]>([]); // Типизируем состояние как массив Trending

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const trendings = await getWeekTranding(); // Типизируем результат как Trending[]
        setWeekTrending(trendings);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrending();
  }, []);

  return weekTrending;
};

export default useWeekTrending;
