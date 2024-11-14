import { useState, useEffect } from 'react';
import { getSeriesByGenre } from '@/shared/api/api';
import { useSelector } from 'react-redux';

const useFilterSeriesByGenre = () => {
  const genreId = useSelector((state) => state.filter);
  const [page, setPage] = useState(1);
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    setPage(1);
    setSeries([]);
  }, [genreId]);

  return { series, isLoading, setPage };
};

export default useFilterSeriesByGenre;
