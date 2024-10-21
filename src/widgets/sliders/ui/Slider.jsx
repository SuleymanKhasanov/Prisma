import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Slider = ({ moviesAndShows, children }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={'auto'}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
    >
      {moviesAndShows.map((element, index) => (
        <SwiperSlide key={element.id || index}>
          {children(element)}{' '}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
