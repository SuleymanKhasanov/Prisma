import { useState, useEffect } from 'react';
import { getWeekTranding } from '../api/api';

const useWeekTrending = () => {
  const [weekTrending, setWeekTrending] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const trendings = await getWeekTranding();
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
