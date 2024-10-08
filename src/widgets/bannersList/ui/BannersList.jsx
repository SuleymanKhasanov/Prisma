import usePopularMovies from './hooks/usePopularMovies';
import { Banner } from '@/entities/banner';
import styles from './styles/BannersList.module.css';

const BannersList = () => {
  const popularMovies = usePopularMovies();

  return (
    <div className={styles.bannersList}>
      {popularMovies.length > 0
        ? popularMovies.map((element) => (
            <Banner
              key={element.id}
              title={element.title || element.name}
              rating={element.vote_average}
              poster={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
              mediaType={element.media_type}
              genere={element.genre_ids}
            />
          ))
        : null}
    </div>
  );
};

export default BannersList;
