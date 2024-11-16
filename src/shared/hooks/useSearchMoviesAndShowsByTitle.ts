import { useEffect, useState } from 'react';
import { getSearchMovieByTitle } from '../api/api';

const useSearchMovieAndShowsByTitle = (query: string) => {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (query.trim().length === 0) return; // Не выполняем запрос, если строка поиска пустая

    const searchMovie = async () => {
      try {
        const searchResults = await getSearchMovieByTitle(query); // Запрос с query
        setSearchData(searchResults);
      } catch (error) {
        console.log(error);
      }
    };

    searchMovie();
  }, [query]); // Запускать запрос при изменении query

  return searchData;
};

export default useSearchMovieAndShowsByTitle;
