import { moviesGeners } from '@/shared/assets/genresId';
import { seriesGenere } from '@/shared/assets/genresId';
import close from '@/shared/icons/close.svg';
import styles from './styles/GenreFilter.module.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filter } from '../utils/slice/slice';

// Типизация пропсов компонента
interface GenreFilterProps {
  genereType: 'movie' | 'series'; // Тип жанра (фильмы или сериалы)
}

const GenreFilter: React.FC<GenreFilterProps> = ({ genereType }) => {
  const genreClass = (id: number): string => {
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
      case 10759:
        return styles.actionAdventure; // Боевик и Приключения
      case 10762:
        return styles.kids; // Детский
      case 10763:
        return styles.news; // Новости
      case 10764:
        return styles.reality; // Реалити-шоу
      case 10765:
        return styles.fantasySeries; // Фэнтези
      case 10766:
        return styles.soapOpera; // Мыльная опера
      case 10767:
        return styles.talkShow; // Ток-шоу
      case 10768:
        return styles.warPolitics; // Война и Политика
      default:
        return styles.default; // Дефолтный стиль
    }
  };

  const [selectedGenre, setSelectedGenre] = useState<number | null>(
    null,
  );

  const [filterMediaType, setFilterMediaType] = useState<
    typeof moviesGeners | typeof seriesGenere | null
  >(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (genereType === 'series') {
      setFilterMediaType(seriesGenere);
    } else if (genereType === 'movie') {
      setFilterMediaType(moviesGeners);
    }
  }, [genereType]);

  const handleOnClick = (id: number | null) => {
    setSelectedGenre((prevSelectedGenre) =>
      prevSelectedGenre === id ? null : id,
    );
    if (id) {
      dispatch(filter([id])); // Отправляем выбранный жанр в Redux
    } else {
      dispatch(filter([])); // Сброс фильтра
    }
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
        {filterMediaType?.genres
          .filter((element) => element.id !== 16) // Фильтруем жанр с id 16
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
