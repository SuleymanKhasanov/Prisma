import styles from './MovieCover.module.css';
import { MovieCoverProps } from '../model/interfaces';

const MovieCover = ({ title, poster }: MovieCoverProps) => {
  return (
    <div className={styles.movieCover}>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster}`}
        alt={title}
        className={styles.moviePoster}
      />
    </div>
  );
};

export default MovieCover;
