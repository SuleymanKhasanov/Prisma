import { Banner } from '@/widgets/banner';
import { Slider } from '@/widgets/sliders';
import useWeekTrending from '@/shared/hooks/useWeekTrends';
import usePopularMovies from '@/shared/hooks/usePopularMovies';
import usePopularShows from '@/shared/hooks/usePopulerTvShows';
import useTopRatedMovies from '@/shared/hooks/useTopRatedMovies';
import useStories from '@/shared/hooks/useStories';
import BannerSkeleton from '@/entities/bannerSkeleton/ui/BannerSkeleton';
import { StoriesBanner } from '@/features/stories';
import 'swiper/css';
import styles from './styles/Home.module.css';
import StoriesModalWindow from '@/features/stories/storiesModalWindow/ui/StoriesModalWindow';
import { GaneresBanner } from '@/features/ganresBanner';
import { moviesGeners } from '@/shared/assets/genresId';
import useSectionAutoplay from '@/widgets/sliders/hooks/useSectionAutoplay';

const Home = () => {
  const weekTrends = useWeekTrending();
  const popularMovies = usePopularMovies();
  const popularShows = usePopularShows();
  const topRatedMovies = useTopRatedMovies();
  const stories = useStories();

  const sliderControls = useSectionAutoplay();

  return (
    <section className={styles.homePage}>
      {/* Stories Banner */}
      <div className={styles.stories}>
        {stories.movieTrailers.length > 0 &&
          stories.movieTrailers.map((element, index) => {
            const movie = stories.popularMovies.find(
              (e) => e.id === element.movieId,
            );
            const movieKey = element.trailer?.[0]?.key;
            return movie ? (
              <StoriesBanner
                key={`${movie.id}-${index}`}
                image={movie.backdrop_path}
                title={movie.title}
                id={movie.id}
                movieKey={movieKey}
              />
            ) : null;
          })}
      </div>

      <StoriesModalWindow />
      {/* Week Trends */}
      <div className={styles.weekTrends}>
        <h2 className={styles.sectionTitle}>Тренды недели</h2>
        <div className={styles.wrapper}>
          {weekTrends.length > 0 ? (
            <Slider
              moviesAndShows={weekTrends}
              autoplay={sliderControls.weekTrends}
            >
              {(element) => (
                <Banner
                  key={element.id}
                  mediaType={element.media_type}
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

      {/* GaneresList */}

      <ul className={styles.ganersList}>
        {moviesGeners.genres.map((element) => (
          <GaneresBanner
            title={element.name}
            id={element.id}
            key={element.id}
          />
        ))}
      </ul>

      {/* Popular TV Shows */}
      <div className={styles.moviesList}>
        <h3 className={styles.sectionTitle}>Популярные ТВ-шоу</h3>
        <div className={styles.wrapper}>
          {popularShows.length > 0 ? (
            <Slider
              moviesAndShows={popularShows}
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

      {/* Top Rated Movies */}
      <div className={styles.weekTrends}>
        <h2 className={styles.sectionTitle}>Фильмы топ рейтинга</h2>
        <div className={styles.wrapper}>
          {topRatedMovies.length > 0 ? (
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
    </section>
  );
};

export default Home;
