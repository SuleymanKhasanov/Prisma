import useLoadMovies from '../utils/hooks/useLoadMovies';
import BannerSkeleton from '@/entities/bannerSkeleton/ui/BannerSkeleton';
import { Banner } from '@/widgets/banner';
import styles from './styles/Movie.module.css';
import { GenreFilter } from '@/features/genreFilter';

const Movie = () => {
  const { popularMovies, isLoading, movieContainerRef } =
    useLoadMovies();

  return (
    <>
      <section
        ref={movieContainerRef}
        className={`${styles.movie}`}
        style={{ overflowY: 'auto', maxHeight: '100vh' }}
      >
        <div className={styles.sectionTitleWrapper}>
          <h2 className={styles.sectionTitle}>Популярные фильмы</h2>
        </div>
        <div className={styles.moviesContainer}>
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
          {isLoading && <BannerSkeleton count={10} size="big" />}
        </div>
        <GenreFilter />
      </section>
    </>
  );
};

export default Movie;
