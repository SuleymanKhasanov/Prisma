import { useEffect, useState } from 'react';
import { getPopularSeries } from '../api/api';

// Типы для сериала
interface Show {
  id: number;
  title: string;
  genre_ids: number[];
}

// Тип для возвращаемого значения хука
interface UsePopularShowsReturn {
  popularShows: Show[];
  isLoading: boolean;
}

const usePopularShows = (page: number): UsePopularShowsReturn => {
  const [popularShows, setPopularShows] = useState<Show[]>([]); // Типизируем состояние как массив сериалов
  const [isLoading, setIsLoading] = useState<boolean>(false); // Типизируем состояние как булево значение

  useEffect(() => {
    const fetchPopularSeries = async () => {
      setIsLoading(true);
      try {
        const popularSeriesTV: Show[] = await getPopularSeries(page); // Типизируем результат API-запроса

        // Фильтруем сериалы
        const filteredShows = popularSeriesTV.filter(
          (show) => !show.genre_ids.includes(16),
        );

        // Обновляем состояние сериалов, исключая дубликаты
        setPopularShows((prevShows) => {
          const uniqueShows = filteredShows.filter(
            (newShow) =>
              !prevShows.some((show) => show.id === newShow.id),
          );
          return [...prevShows, ...uniqueShows];
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
