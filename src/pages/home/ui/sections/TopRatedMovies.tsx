import { BannerSkeleton } from '@/widgets/banner';
import useTopRatedMovies from '@/shared/hooks/useTopRatedMovies';
import { Banner } from '@/widgets/banner';
import { Slider } from '@/widgets/sliders';
import useSectionAutoplay from '@/widgets/sliders/hooks/useSectionAutoplay';
import styles from './styles/TopRatedMovies.module.css';
import { IMovieData } from './module/interfaces';

const TopRatedMovies = () => {
  const topRatedMovies = useTopRatedMovies();
  const sliderControls = useSectionAutoplay();

  const transformedMovies = topRatedMovies.map((movie) => ({
    id: movie.id,
    title: movie.title || '',
    vote_average: movie.vote_average || 0,
    poster_path: movie.poster_path || '',
    genre_ids: movie.genre_ids || [],
    release_date: movie.release_date || '',
  }));

  return (
    <>
      <div className={styles.weekTrends}>
        <h2 className={styles.sectionTitle}>Фильмы топ рейтинга</h2>
        <div className={styles.wrapper}>
          {transformedMovies?.length > 0 ? (
            <Slider
              moviesAndShows={transformedMovies}
              autoplay={sliderControls.topRatedMovies}
            >
              {(element: IMovieData) => (
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
