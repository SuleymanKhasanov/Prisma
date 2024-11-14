import BannerSkeleton from '@/entities/bannerSkeleton/ui/BannerSkeleton';
import usePopularShows from '@/shared/hooks/usePopulerTvShows';
import { Banner } from '@/widgets/banner';
import { Slider } from '@/widgets/sliders';
import useSectionAutoplay from '@/widgets/sliders/hooks/useSectionAutoplay';
import styles from './styles/PopularTvShows.module.css';

const PopulerTvShows = () => {
  const popularShows = usePopularShows();
  const sliderControls = useSectionAutoplay();

  return (
    <>
      {/* Popular TV Shows */}
      <div className={styles.moviesList}>
        <h3 className={styles.sectionTitle}>Популярные ТВ-шоу</h3>
        <div className={styles.wrapper}>
          {popularShows.popularShows.length > 0 ? (
            <Slider
              moviesAndShows={popularShows.popularShows}
              autoplay={sliderControls.popularShows}
            >
              {(element) => (
                <Banner
                  key={element.id}
                  mediaType={'tv'}
                  title={element.title || element.name}
                  rating={element.vote_average}
                  poster={element.backdrop_path}
                  genere={element.genre_ids}
                  id={element.id}
                  sectionName="popularShows"
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

export default PopulerTvShows;
