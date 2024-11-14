import React from 'react';
import useWeekTrending from '@/shared/hooks/useWeekTrends';
import { Slider } from '@/widgets/sliders';
import { Banner } from '@/widgets/banner';
import BannerSkeleton from '@/entities/bannerSkeleton/ui/BannerSkeleton';
import styles from './styles/WeekTrends.module.css';
import useSectionAutoplay from '@/widgets/sliders/hooks/useSectionAutoplay';

const WeekTrends = () => {
  const weekTrends = useWeekTrending();
  const sliderControls = useSectionAutoplay();
  return (
    <>
      <div className={styles.weekTrends}>
        <h2 className={styles.sectionTitle}>Тренды недели</h2>
        <div className={styles.wrapper}>
          {weekTrends?.length > 0 ? (
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
    </>
  );
};

export default WeekTrends;
