import BannerSkeleton from '@/entities/bannerSkeleton/ui/BannerSkeleton';
import useTopRatedMovies from '@/shared/hooks/useTopRatedMovies';
import { Banner } from '@/widgets/banner';
import { Slider } from '@/widgets/sliders';
import useSectionAutoplay from '@/widgets/sliders/hooks/useSectionAutoplay';
import styles from './styles/TopRatedMovies.module.css';

const TopRatedMovies = () => {
  const topRatedMovies = useTopRatedMovies();
  const sliderControls = useSectionAutoplay();
  return (
    <>
      {/* Top Rated Movies */}
      <div className={styles.weekTrends}>
        <h2 className={styles.sectionTitle}>Фильмы топ рейтинга</h2>
        <div className={styles.wrapper}>
          {topRatedMovies?.length > 0 ? (
            <Slider
              moviesAndShows={topRatedMovies}
              autoplay={sliderControls.topRatedMovies}
            >
              {(element) => (
                <Banner
                  key={element.id}
                  mediaType={'movie'}
                  title={element.title || element.name}
                  rating={element.vote_average}
                  poster={element.poster_path}
                  genere={element.genre_ids}
                  id={element.id}
                  sectionName="topRatedMovies"
                  date={element.release_date}
                />
              )}
            </Slider>
          ) : (
            <BannerSkeleton count={4} size={'big'} />
          )}
        </div>
      </div>
    </>
  );
};

export default TopRatedMovies;
