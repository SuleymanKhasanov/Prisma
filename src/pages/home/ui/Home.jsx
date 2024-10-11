import { Banner } from '@/widgets/banner';
import useWeekTrending from '@/shared/hooks/useWeekTrends';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styles from './styles/Home.module.css';
import 'swiper/css';
import usePopularMovies from '@/shared/hooks/usePopularMovies';

const Home = () => {
  const weekTrends = useWeekTrending();
  const popularMovies = usePopularMovies();

  return (
    <section className={styles.homePage}>
      <div className={styles.weekTrends}>
        <h2 className={styles.sectionTitle}>Тренды недели</h2>
        <div className={styles.weekTrendsWrapper}>
          {weekTrends.length > 0 ? (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={'auto'}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {weekTrends.map((element, index) => (
                <SwiperSlide key={element.id || index}>
                  <Banner
                    mediaType={element.media_type}
                    title={element.title || element.name}
                    rating={element.vote_average}
                    poster={element.poster_path}
                    genere={element.genre_ids}
                    id={element.id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p>Нет трендов на этой неделе</p>
          )}
        </div>
      </div>
      <div className={styles.moviesList}>
        <h3 className={styles.sectionTitle}>Популярные фильмы</h3>
        <div className={styles.popularMoviesWrapper}>
          {popularMovies.length > 0 ? (
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={'auto'}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                600: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {popularMovies.map((element) => (
                <SwiperSlide key={element.id}>
                  <Banner
                    mediaType={'movie'}
                    title={element.title || element.name}
                    rating={element.vote_average}
                    poster={element.backdrop_path}
                    genere={element.genre_ids}
                    id={element.id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Home;
