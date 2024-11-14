import { Banner } from '@/widgets/banner';
import { Slider } from '@/widgets/sliders';
import usePopularShows from '@/shared/hooks/usePopulerTvShows';
import useTopRatedMovies from '@/shared/hooks/useTopRatedMovies';
import BannerSkeleton from '@/entities/bannerSkeleton/ui/BannerSkeleton';
import 'swiper/css';
import styles from './styles/Home.module.css';
import useSectionAutoplay from '@/widgets/sliders/hooks/useSectionAutoplay';
import Stories from './sections/Stories';
import WeekTrends from './sections/WeekTrends';
import PopularMovies from './sections/PopularMovies';
import TopRatedMovies from './sections/TopRatedMovies';
import PopulerTvShows from './sections/PopulerTvShows';

const Home = () => {
  const popularShows = usePopularShows();

  const sliderControls = useSectionAutoplay();

  return (
    <section className={styles.homePage}>
      <Stories />
      <WeekTrends />
      <PopularMovies />
      <TopRatedMovies />
      <PopulerTvShows />

      {/* Popular TV Shows
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
      </div> */}
    </section>
  );
};

export default Home;
