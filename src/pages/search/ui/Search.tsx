import { SearchInput } from '@/features/searchInput';
import styles from './styles/Search.module.css';
import SearchData from './section/SearchData';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  const findMovies = useSelector((state) => state.search);

  useEffect(() => {
    if (findMovies.length > 0) {
      setSearchData(findMovies);
    }
  }, [findMovies]);

  return (
    <div>
      {searchData.length > 0 ? (
        <SearchData searchData={searchData} />
      ) : (
        <div className={styles.searchTitle}>
          Поиск фильмов и сериалов
        </div>
      )}

      <SearchInput />
    </div>
  );
};

export default Search;
