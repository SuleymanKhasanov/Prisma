import { useState, useEffect } from 'react';
import { getSeriesByGenre } from '@/shared/api/api';
import { useSelector } from 'react-redux';

// Типизация сериала
interface Serie {
  id: number;
  genre_ids: number[];
  // Добавьте остальные поля сериала, если они вам нужны
}

const useFilterSeriesByGenre = () => {
  const genreId = useSelector(
    (state: { filter: number | null }) => state.filter,
  );
  const [page, setPage] = useState<number>(1);
  const [series, setSeries] = useState<Serie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchSeries = async () => {
      if (!genreId) return;

      setIsLoading(true);

      try {
        const fetchedSeries = await getSeriesByGenre(genreId, page);

        // Фильтруем сериалы, исключая те, у которых genre_id 16
        const filteredSeries = fetchedSeries.filter(
          (serie) => !serie.genre_ids.includes(16),
        );

        // Обновляем состояние списка сериалов, исключая дубли
        setSeries((prevSeries) => {
          const uniqueSeries = filteredSeries.filter(
            (newSerie) =>
              !prevSeries.some((serie) => serie.id === newSerie.id),
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
