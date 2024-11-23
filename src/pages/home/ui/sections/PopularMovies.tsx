import { Banner } from '@/widgets/banner';
import { Slider } from '@/widgets/sliders';
import { BannerSkeleton } from '@/widgets/banner';
import usePopularMovies from '@/shared/hooks/usePopularMovies';
import useSectionAutoplay from '@/widgets/sliders/utils/hooks/useSectionAutoplay';
import styles from './styles/PopularMovies.module.css';
import { IMovieData } from '../../model/interfaces';

const PopularMovies = () => {
  const popularMovies = usePopularMovies(1);
  const sliderControls = useSectionAutoplay();

  // Приведение данных к типу IMovieData
  const transformedMovies = popularMovies?.popularMovies.map(
    (movie) => ({
      id: movie.id,
      title: movie.title || '',
      vote_average: movie.vote_average || 0,
      poster_path: movie.poster_path || '',
      genre_ids: movie.genre_ids || [],
      release_date: movie.release_date || '',
    }),
  );
  return (
    <>
      <div className={styles.moviesList}>
        <h3 className={styles.sectionTitle}>Популярные фильмы</h3>
        <div className={styles.wrapper}>
          {transformedMovies && transformedMovies.length > 0 ? (
            <Slider
              moviesAndShows={transformedMovies}
              autoplay={sliderControls.popularMovies}
            >
              {(element: IMovieData) => (
                <Banner
                  key={element.id}
                  mediaType={'movie'}
                  title={element.title}
                  rating={element.vote_average}
                  poster={element.poster_path}
                  genere={element.genre_ids}
                  id={element.id}
                  sectionName="popularMovies"
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

export default PopularMovies;
