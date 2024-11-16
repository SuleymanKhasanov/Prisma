import { useEffect, useState } from 'react';
import { getPopularSeries } from '../api/api';

// Типы для сериала
interface Show {
  id: number;
  title: string;
  genre_ids: number[];
  name?: string;
  vote_average?: number;
  poster_path?: string;
  release_date?: string;
  media_type?: string;
}

// Тип для данных, ожидаемых компонентами
interface IMovieData {
  id: number;
  title?: string;
  name?: string;
  vote_average: number;
  poster_path: string;
  genre_ids: number[];
  release_date: string;
  media_type: string;
}

// Тип для возвращаемого значения хука
interface UsePopularShowsReturn {
  popularShows: IMovieData[];
  isLoading: boolean;
}

const usePopularShows = (page: number): UsePopularShowsReturn => {
  const [popularShows, setPopularShows] = useState<IMovieData[]>([]); // Типизируем состояние как массив IMovieData
  const [isLoading, setIsLoading] = useState<boolean>(false); // Типизируем состояние как булево значение

  useEffect(() => {
    const fetchPopularSeries = async () => {
      setIsLoading(true);
      try {
        const popularSeriesTV: Show[] = await getPopularSeries(page);

        // Фильтруем сериалы
        const filteredShows = popularSeriesTV.filter(
          (show) => !show.genre_ids.includes(16),
        );

        // Преобразуем `Show` в `IMovieData`
        const adaptedShows: IMovieData[] = filteredShows.map(
          (show) => ({
            id: show.id,
            title: show.title,
            name: show.name,
            vote_average: show.vote_average ?? 0,
            poster_path: show.poster_path ?? '',
            genre_ids: show.genre_ids,
            release_date: show.release_date ?? '',
            media_type: 'tv',
          }),
        );

        // Обновляем состояние сериалов, исключая дубликаты
        setPopularShows((prevShows) => {
          const uniqueShows = adaptedShows.filter(
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
