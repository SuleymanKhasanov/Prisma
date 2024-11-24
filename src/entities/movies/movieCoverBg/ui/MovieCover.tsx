import styles from './MovieCover.module.css';
import { MovieCoverProps } from '../model/interfaces';

const MovieCover = ({
  id,
  title,
  description,
  poster,
}: MovieCoverProps) => {
  return (
    <div className={styles.movieCover}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
        alt={`${title}`}
        className={styles.moviePoster}
      />
      <div className={styles.titleBox}>
        <h1 className={styles.movieName}>{title}</h1>
        <span className={styles.movieDescription}>{description}</span>
      </div>
    </div>
  );
};

export default MovieCover;
