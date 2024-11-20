import { useState, useEffect } from 'react';
import { getSeriesByGenre } from '@/shared/api/api';
import { useSelector } from 'react-redux';

// Типизация сериала
interface Serie {
  id: number;
  title?: string;
  name?: string;
  vote_average: number;
  poster_path: string;
  genre_ids: number[];
  release_date: string;
  media_type: string;
}

interface RootState {
  filter: number | null;
}

const useFilterSeriesByGenre = () => {
  const genreId = useSelector((state: RootState) => state.filter);
  const [page, setPage] = useState<number>(1);
  const [series, setSeries] = useState<Serie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchSeries = async () => {
      if (!genreId) return;

      setIsLoading(true);

      try {
        // Типизируем результат запроса как массив Serie
        const fetchedSeries: Serie[] = await getSeriesByGenre(
          genreId,
          page,
        );

        // Фильтруем сериалы, исключая те, у которых genre_id 16
        const filteredSeries = fetchedSeries.filter(
          (serie: Serie) => !serie.genre_ids.includes(16), // Явная типизация для переменной serie
        );

        // Обновляем состояние списка сериалов, исключая дубли
        setSeries((prevSeries: Serie[]) => {
          const uniqueSeries = filteredSeries.filter(
            (newSerie: Serie) =>
              !prevSeries.some(
                (serie: Serie) => serie.id === newSerie.id,
              ), // Явная типизация для переменной serie и newSerie
          );
          return [...prevSeries, ...uniqueSeries];
        });
      } catch (error) {
        console.error('Ошибка при загрузке сериалов:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSeries();
  }, [genreId, page]);

  useEffect(() => {
    // Сбросить сериалы и страницу при изменении жанра
    setSeries([]);
    setPage(1);
  }, [genreId]);

  return { series, isLoading, setPage };
};

export default useFilterSeriesByGenre;
