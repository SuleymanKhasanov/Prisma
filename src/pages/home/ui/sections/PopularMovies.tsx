import { Banner } from '@/widgets/banner';
import { Slider } from '@/widgets/sliders';
import BannerSkeleton from '@/entities/bannerSkeleton/ui/BannerSkeleton';
import usePopularMovies from '@/shared/hooks/usePopularMovies';
import useSectionAutoplay from '@/widgets/sliders/hooks/useSectionAutoplay';
import styles from './styles/PopularMovies.module.css';

const PopularMovies = () => {
  const popularMovies = usePopularMovies();
  const sliderControls = useSectionAutoplay();
  return (
    <>
      {/* Popular Movies */}
      <div className={styles.moviesList}>
        <h3 className={styles.sectionTitle}>Популярные фильмы</h3>
        <div className={styles.wrapper}>
          {popularMovies.popularMovies.length > 0 ? (
            <Slider
              moviesAndShows={popularMovies.popularMovies}
              autoplay={sliderControls.popularMovies}
            >
              {(element) => (
                <Banner
                  key={element.id}
                  mediaType={'movie'}
                  title={element.title || element.name}
                  rating={element.vote_average}
                  poster={element.backdrop_path}
                  genere={element.genre_ids}
                  id={element.id}
                  sectionName="popularMovies"
                  date={element.release_date}
                />
              )}
            </Slider>
          ) : (
            <BannerSkeleton count={4} size={'small'} />
          )}
        </div>
      </div>
    </>
  );
};

export default PopularMovies;
