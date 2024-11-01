import BannerSkeleton from '@/entities/bannerSkeleton/ui/BannerSkeleton';
import usePopularMovies from '@/shared/hooks/usePopularMovies';
import { Banner } from '@/widgets/banner';
import styles from './styles/Movie.module.css';

const Movie = () => {
  const popularMovies = usePopularMovies();
  return (
    <>
      <div className={styles.sectionTitleWriper}>
        <h2 className={styles.sectionTitle}>Популярные фильмы</h2>
      </div>
      <section className={styles.movie}>
        {popularMovies.length > 0 ? (
          popularMovies.map((element) => (
            <Banner
              key={element.id}
              mediaType={'movie'}
              title={element.title || element.name}
              rating={element.vote_average}
              poster={element.poster_path}
              genere={element.genre_ids}
              id={element.id}
              sectionName=""
            />
          ))
        ) : (
          <BannerSkeleton count={10} size={'big'} />
        )}
      </section>
    </>
  );
};

export default Movie;
