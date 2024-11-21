import { BannerSkeleton } from '@/widgets/banner';
import usePopularShows from '@/shared/hooks/usePopulerTvShows';
import { Banner } from '@/widgets/banner';
import { Slider } from '@/widgets/sliders';
import useSectionAutoplay from '@/widgets/sliders/hooks/useSectionAutoplay';
import styles from './styles/PopularTvShows.module.css';
import { IMovieData } from './module/interfaces';

const PopulerTvShows = () => {
  const popularShows = usePopularShows(1);
  const sliderControls = useSectionAutoplay();

  return (
    <div className={styles.moviesList}>
      <h3 className={styles.sectionTitle}>Популярные ТВ-шоу</h3>
      <div className={styles.wrapper}>
        {popularShows?.popularShows.length > 0 ? (
          <Slider
            moviesAndShows={popularShows.popularShows}
            autoplay={sliderControls.popularShows}
          >
            {(element: IMovieData) => (
              <Banner
                key={element.id}
                mediaType={'tv'}
                title={element.title || element.name}
                rating={element.vote_average}
                poster={element.poster_path}
                genere={element.genre_ids}
                id={element.id}
                sectionName="popularShows"
                date={element.release_date}
              />
            )}
          </Slider>
        ) : (
          <BannerSkeleton count={4} size={'big'} />
        )}
      </div>
    </div>
  );
};

export default PopulerTvShows;
