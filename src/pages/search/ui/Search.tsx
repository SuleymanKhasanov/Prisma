import { SearchInput } from '@/features/searchInput';
import styles from './styles/Search.module.css';
import SearchData from './section/SearchData';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Movie } from './modules/interfaces';

const Search = () => {
  // Явно указываем тип состояния searchData как Movie[]
  const [searchData, setSearchData] = useState<Movie[]>([]);

  const findMovies = useSelector(
    (state: { search: Movie[] }) => state.search,
  );

  useEffect(() => {
    if (findMovies.length > 0) {
      setSearchData(findMovies);
    }
  }, [findMovies]);

  console.log(findMovies);

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
