import { moviesGeners } from '@/shared/assets/genresId';
import { seriesGenere } from '@/shared/assets/genresId';
import styles from './Card.module.css';
import { Follback } from './movieCardFollback';
import { CardProps } from '../model/interfaces';
import { Link } from 'react-router-dom';
import { watchCurrentMovie } from '../utils/slice';
import { useDispatch } from 'react-redux';

const Card: React.FC<CardProps> = ({
  mediaType,
  title,
  poster,
  genere,
  date,
  id,
}) => {
  const genres =
    mediaType === 'movie' ? moviesGeners.genres : seriesGenere.genres;

  const genreNames = genere?.map((genreId) => {
    const genre = genres.find((g) => g.id === genreId);
    return genre ? genre.name : 'Неизвестный жанр';
  });

  const dispatch = useDispatch();

  const henndleToSendCurrentMovieData = () => {
    dispatch(watchCurrentMovie({ id: id, media_type: mediaType }));
  };

  return (
    <Link to={`/${id}`}>
      <div
        className={styles.card}
        onClick={henndleToSendCurrentMovieData}
      >
        {poster === 'https://image.tmdb.org/t/p/w500/undefined' ||
        poster === 'https://image.tmdb.org/t/p/w500/null' ? (
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
          <p className={styles.description}>
            {genreNames?.join(', ')}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
