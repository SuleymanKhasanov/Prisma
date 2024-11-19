import React, { FormEvent, useState, useEffect } from 'react';
import styles from './styles/SearchInput.module.css';
import searchIcon from '@/shared/icons/search.svg';
import useSearchMovieAndShowsByTitle from '@/shared/hooks/useSearchMoviesAndShowsByTitle';
import { searchData } from '../utils/slice'; // Импортируем правильное действие
import { useDispatch } from 'react-redux';

const SearchInput: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(inputText);
  const dispatch = useDispatch();

  // Хук для поиска
  const searchResults = useSearchMovieAndShowsByTitle(debouncedQuery);

  // Эффект для дебаунса ввода текста
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(inputText); // Обновляем запрос через задержку
    }, 500); // 500 мс задержка

    return () => clearTimeout(timer); // Очистка таймера при изменении ввода
  }, [inputText]);

  const handleToSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchResults.length > 0) {
      dispatch(searchData(searchResults)); // Диспатчим результаты поиска
    }
    setInputText('');
  };

  return (
    <div className={styles.searchBox}>
      <form onSubmit={handleToSubmit} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Поиск по названию"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchBtn}>
          <img src={searchIcon} alt="Поиск" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
