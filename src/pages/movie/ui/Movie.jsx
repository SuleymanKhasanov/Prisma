import useLoadMovies from '../utils/hooks/useLoadMovies';
import BannerSkeleton from '@/entities/bannerSkeleton/ui/BannerSkeleton';

import { Banner } from '@/widgets/banner';
import styles from './styles/Movie.module.css';

const Movie = () => {
  const { popularMovies, isLoading } = useLoadMovies();

  return (
    <>
      <div className={styles.sectionTitleWrapper}>
        <h2 className={styles.sectionTitle}>Популярные фильмы</h2>
      </div>
      <section className={styles.movie}>
        {popularMovies.length > 0 ? (
          popularMovies.map((element) => (
            <Banner
              key={element.id}
              mediaType="movie"
              title={element.title || element.name}
              rating={element.vote_average}
              poster={element.poster_path}
              genere={element.genre_ids}
              id={element.id}
              sectionName=""
              date={element.release_date}
            />
          ))
        ) : (
          <BannerSkeleton count={10} size="big" />
        )}
      </section>
      {isLoading && <BannerSkeleton count={10} size="big" />}
    </>
  );
};

export default Movie;
