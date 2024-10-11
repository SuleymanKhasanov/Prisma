import { moviesGeners } from '@/shared/assets/genresId';
import { seriesGenere } from '@/shared/assets/genresId';
import styles from './styles/Card.module.css';

const Card = ({ mediaType, title, poster, genere }) => {
  const genres =
    mediaType === 'movie' ? moviesGeners.genres : seriesGenere.genres;

  const genreNames = genere.map((genreId) => {
    const genre = genres.find((g) => g.id === genreId);
    return genre ? genre.name : 'Неизвестный жанр';
  });

  return (
    <div className={styles.card}>
      <img
        src={poster}
        alt={`poster by ${title}`}
        className={styles.cardImg}
      />
      <div className={styles.cardInfo}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{genreNames.join(', ')}</p>
      </div>
    </div>
  );
};

export default Card;
