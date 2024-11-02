import { moviesGeners } from '@/shared/assets/genresId';
import close from '@/shared/icons/close.svg';
import styles from './styles/GenreFilter.module.css';
import { useState } from 'react';

const GenreFilter = () => {
  const genreClass = (id) => {
    switch (id) {
      case 28:
        return styles.action; // Боевик
      case 12:
        return styles.adventure; // Приключения
      case 16:
        return styles.animation; // Мультфильм
      case 35:
        return styles.comedy; // Комедия
      case 80:
        return styles.crime; // Криминал
      case 99:
        return styles.documentary; // Документальный
      case 18:
        return styles.drama; // Драма
      case 10751:
        return styles.family; // Семейный
      case 14:
        return styles.fantasy; // Фэнтези
      case 36:
        return styles.history; // История
      case 27:
        return styles.horror; // Ужасы
      case 10402:
        return styles.music; // Музыка
      case 9648:
        return styles.mystery; // Детектив
      case 10749:
        return styles.romance; // Мелодрама
      case 878:
        return styles.scifi; // Фантастика
      case 10770:
        return styles.tvMovie; // Телевизионный фильм
      case 53:
        return styles.thriller; // Триллер
      case 10752:
        return styles.war; // Военный
      case 37:
        return styles.western; // Вестерн
      default:
        return styles.default; // Дефолтный стиль
    }
  };

  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleOnClick = (id) => {
    setSelectedGenre(selectedGenre === id ? null : id);
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.genresList}>
        <li
          className={styles.genresReset}
          onClick={() => handleOnClick(null)}
        >
          <img
            src={close}
            alt="Сбросить фильтры"
            title="Сбросить фильтры"
          />
        </li>
        {moviesGeners.genres
          .filter((element) => element.id !== 16) // Фильтруем элементы с id 16
          .map((element) => (
            <li
              key={element.id}
              className={`${styles.genresItem} ${
                selectedGenre === element.id
                  ? genreClass(element.id)
                  : ''
              }`}
              onClick={() => handleOnClick(element.id)}
            >
              {element.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GenreFilter;
