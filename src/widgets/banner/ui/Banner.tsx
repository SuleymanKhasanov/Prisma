import { useState } from 'react';
import { Card } from '@/entities/movies/ui/movieCard';
import { Raiting } from '@/entities/movies/ui/movieRaiting';
import { ActionButton, ActionItem } from '@/features/action';
import styles from './styles/Banner.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  sliderAutoplay,
  sliderStop,
} from '@/widgets/sliders/utils/slice';

// Тип для пропсов Banner
interface BannerType {
  mediaType: string;
  title?: string;
  rating: number;
  poster: string;
  genere: number[];
  name?: string;
  id: number;
  sectionName: string;
  date: string;
}

// Тип для состояния modalActionItem
interface ModalActionItem {
  [key: number]: boolean;
}

const Banner: React.FC<BannerType> = ({
  mediaType,
  title,
  rating,
  poster,
  genere,
  name,
  id,
  sectionName,
  date,
}) => {
  const [modalActionItem, setModalActionItem] =
    useState<ModalActionItem>({});
  const autoplay = useSelector((state: any) => state.slider.autoplay);
  const dispatch = useDispatch();

  const handleShowModalAction = (id: number, sectionName: string) => {
    setModalActionItem((prev: ModalActionItem) => ({
      ...prev,
      [id]: !prev[id],
    }));

    if (autoplay) {
      dispatch(
        sliderStop({
          sectionName: sectionName,
        }),
      );
    } else {
      dispatch(
        sliderAutoplay({
          id: id,
          autoplay: true,
        }),
      );
    }
  };

  const releaseDate = date?.split('-')[0];

  return (
    <div className={styles.banner}>
      <div className={styles.bannerItem}>
        <Card
          title={title || name}
          poster={`https://image.tmdb.org/t/p/w500/${poster}`}
          mediaType={mediaType}
          genere={genere}
          date={releaseDate}
        />
      </div>
      <div className={styles.bannerAction}>
        <Raiting rating={rating} />
        <ActionButton
          onClick={() => handleShowModalAction(id, sectionName)}
          id={id}
        />

        {modalActionItem[id] ? <ActionItem /> : null}
      </div>
    </div>
  );
};

export default Banner;
