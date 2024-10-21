import { Banner } from '@/widgets/banner';
import { Slider } from '@/widgets/sliders';
import useWeekTrending from '@/shared/hooks/useWeekTrends';
import usePopularMovies from '@/shared/hooks/usePopularMovies';
import usePopularShows from '@/shared/hooks/usePopulerTvShows';
import useTopRatedMovies from '@/shared/hooks/useTopRatedMovies';

import styles from './styles/Home.module.css';

const Home = () => {
  const weekTrends = useWeekTrending();
  const popularMovies = usePopularMovies();
  const popularShows = usePopularShows();
  const topRatedMovies = useTopRatedMovies();

  return (
    <section className={styles.homePage}>
      <div className={styles.weekTrends}>
        <h2 className={styles.sectionTitle}>Тренды недели</h2>
        <div className={styles.weekTrendsWrapper}>
          {weekTrends.length > 0 ? (
            <Slider moviesAndShows={weekTrends}>
              {(element) => (
                <Banner
                  key={element.id}
                  mediaType={element.media_type}
                  title={element.title || element.name}
                  rating={element.vote_average}
                  poster={element.poster_path}
                  genere={element.genre_ids}
                  id={element.id}
                />
              )}
            </Slider>
          ) : (
            <p>Нет трендов на этой неделе</p>
          )}
        </div>
      </div>
      <div className={styles.moviesList}>
        <h3 className={styles.sectionTitle}>Популярные фильмы</h3>
        <div className={styles.popularMoviesWrapper}>
          {popularMovies.length > 0 ? (
            <Slider moviesAndShows={popularMovies}>
              {(element) => (
                <Banner
                  key={element.id}
                  mediaType={'movie'}
                  title={element.title || element.name}
                  rating={element.vote_average}
                  poster={element.backdrop_path}
                  genere={element.genre_ids}
                  id={element.id}
                />
              )}
            </Slider>
          ) : (
            <p>Нет списка популятных фильмов</p>
          )}
        </div>
      </div>
      <div className={styles.moviesList}>
        <h3 className={styles.sectionTitle}>Популярные ТВ-шоу</h3>
        <div className={styles.popularMoviesWrapper}>
          {popularShows.length > 0 ? (
            <Slider moviesAndShows={popularShows}>
              {(element) => (
                <Banner
                  key={element.id}
                  mediaType={'tv'}
                  title={element.title || element.name}
                  rating={element.vote_average}
                  poster={element.backdrop_path}
                  genere={element.genre_ids}
                  id={element.id}
                />
              )}
            </Slider>
          ) : (
            <p>Нет списка популятных ТВ-шоу</p>
          )}
        </div>
      </div>

      <div className={styles.weekTrends}>
        <h2 className={styles.sectionTitle}>Фильмы топ рейтинга</h2>
        <div className={styles.weekTrendsWrapper}>
          {topRatedMovies.length > 0 ? (
            <Slider moviesAndShows={topRatedMovies}>
              {(element) => (
                <Banner
                  key={element.id}
                  mediaType={'movie'}
                  title={element.title || element.name}
                  rating={element.vote_average}
                  poster={element.poster_path}
                  genere={element.genre_ids}
                  id={element.id}
                />
              )}
            </Slider>
          ) : (
            <p>Нет фильмов топ рейтинга</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
