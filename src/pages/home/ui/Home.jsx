import { Banner } from '@/widgets/banner';
import useWeekTrending from '@/shared/hooks/useWeekTrends';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styles from './styles/Home.module.css';
import 'swiper/css';

const Home = () => {
  const weekTrends = useWeekTrending();

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
              // autoplay={{
              //   delay: 3000,
              //   disableOnInteraction: false,
              // }}
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
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p>Нет трендов на этой неделе</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
