import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import { SliderProps } from '../model/interfaces';

const Slider: React.FC<SliderProps> = ({
  moviesAndShows,
  children,
  autoplay,
}) => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      if (autoplay) {
        swiperRef.current.autoplay.start();
      } else {
        swiperRef.current.autoplay.stop();
      }
    }
  }, [autoplay]);

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView="auto"
      loop={true}
      speed={1000}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      }}
    >
      {moviesAndShows.map((element, index) => (
        <SwiperSlide key={element.id || index}>
          {children(element)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
