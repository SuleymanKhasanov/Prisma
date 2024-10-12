import { useEffect, useState } from 'react';
import { getPopularSeries } from '../api/api';

const usePopularShows = () => {
  const [popularShows, setPopularShows] = useState([]);
  useEffect(() => {
    const fetchPopularSeries = async () => {
      try {
        const popularSeriesTV = await getPopularSeries();
        setPopularShows(popularSeriesTV);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPopularSeries();
  }, []);

  return popularShows;
};

export default usePopularShows;
