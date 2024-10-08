import { moviesGeners } from '@/shared/assets/genresId';
import { seriesGenere } from '@/shared/assets/genresId';
import styles from './styles/Banner.module.css';

const Banner = ({ title, poster, mediaType, genere }) => {
  const genres =
    mediaType === 'movie' ? moviesGeners.genres : seriesGenere.genres;

  const genreNames = genere.map((genreId) => {
    const genre = genres.find((g) => g.id === genreId);
    return genre ? genre.name : 'Неизвестный жанр';
  });

  return (
    <div className={styles.banner}>
      <img
        src={poster}
        alt={`poster by ${title}`}
        className={styles.banerImg}
      />
      <div className={styles.bannerInfo}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{genreNames.join(', ')}</p>
      </div>
    </div>
  );
};

export default Banner;
