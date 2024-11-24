import styles from './MovieCover.module.css';
import { MovieCoverProps } from '../model/interfaces';

const MovieCover = ({
  id,
  title,
  description,
  poster,
  linkToMovie,
}: MovieCoverProps) => {
  return (
    <div className={styles.movieCover}>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster}`}
        alt={title}
        className={styles.moviePoster}
      />
      <div className={styles.wrapper}>
        <div className={styles.titleBox}>
          <h1 className={styles.movieName}>{title}</h1>
          <span className={styles.movieDescription}>
            {description}
          </span>
        </div>
        {linkToMovie ? (
          <a className={styles.movieLink} href={linkToMovie}>
            Смотреть
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default MovieCover;
