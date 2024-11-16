import Stories from './sections/Stories';
import WeekTrends from './sections/WeekTrends';
import PopularMovies from './sections/PopularMovies';
import TopRatedMovies from './sections/TopRatedMovies';
import PopulerTvShows from './sections/PopulerTvShows';
import styles from './styles/Home.module.css';

const Home = () => {
  return (
    <section className={styles.homePage}>
      <Stories />
      <WeekTrends />
      <PopularMovies />
      <TopRatedMovies />
      <PopulerTvShows />
    </section>
  );
};

export default Home;
