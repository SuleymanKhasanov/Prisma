import { moviesGeners } from '@/shared/assets/genresId';
import { seriesGenere } from '@/shared/assets/genresId';
import styles from './styles/Card.module.css';
import { Follback } from '@/entities/follback';

interface CardProps {
  mediaType: string; // Уточняем, что это может быть только 'movie' или 'series'
  title: string | undefined;
  poster: string;
  genere: number[]; // Массив чисел, представляющих ID жанров
  date?: string; // Дата может быть строкой или отсутствовать (undefined)
}

const Card: React.FC<CardProps> = ({
  mediaType,
  title,
  poster,
  genere,
  date,
}) => {
  const genres =
    mediaType === 'movie' ? moviesGeners.genres : seriesGenere.genres;

  const genreNames = genere.map((genreId) => {
    const genre = genres.find((g) => g.id === genreId);
    return genre ? genre.name : 'Неизвестный жанр';
  });

  return (
    <div className={styles.card}>
      {poster == 'https://image.tmdb.org/t/p/w500/null' ? (
        <Follback />
      ) : (
        <img
          src={poster}
          alt={`poster by ${title}`}
          className={styles.cardImg}
        />
      )}
      <div className={styles.cardInfo}>
        <h3 className={styles.title}>{title}</h3>
        {date === undefined ? null : (
          <span className={styles.description}>{date} </span>
        )}
        <p className={styles.description}>{genreNames.join(', ')}</p>
      </div>
    </div>
  );
};

export default Card;
