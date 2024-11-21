import useWeekTrending from '@/shared/hooks/useWeekTrends';
import { Slider } from '@/widgets/sliders';
import { Banner } from '@/widgets/banner';
import { BannerSkeleton } from '@/widgets/banner';
import styles from './styles/WeekTrends.module.css';
import useSectionAutoplay from '@/widgets/sliders/hooks/useSectionAutoplay';
import { IMovieData } from './module/interfaces';

const WeekTrends = () => {
  const weekTrends = useWeekTrending();
  const sliderControls = useSectionAutoplay();

  const transformedMovies = weekTrends.map((movie) => ({
    id: movie.id,
    title: movie.title || '',
    name: movie.name || '',
    vote_average: movie.vote_average || 0,
    poster_path: movie.poster_path || '',
    genre_ids: movie.genre_ids || [],
    release_date: movie.release_date || '',
    media_type: movie.media_type || '',
  }));

  return (
    <>
      <div className={styles.weekTrends}>
        <h2 className={styles.sectionTitle}>Тренды недели</h2>
        <div className={styles.wrapper}>
          {transformedMovies?.length > 0 ? (
            <Slider
              moviesAndShows={transformedMovies}
              autoplay={sliderControls.weekTrends}
            >
              {(element: IMovieData) => (
                <Banner
                  key={element.id}
                  mediaType={element.media_type || 'movie'}
                  title={element.title || element.name}
                  rating={element.vote_average}
                  poster={element.poster_path}
                  genere={element.genre_ids}
                  id={element.id}
                  sectionName="weekTrends"
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

export default WeekTrends;
