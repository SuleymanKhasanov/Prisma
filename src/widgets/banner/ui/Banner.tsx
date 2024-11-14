import { useState } from 'react';
import { Card } from '@/entities/card';
import { Raiting } from '@/entities/raiting';
import { ActionButton, ActionItem } from '@/features/action';
import styles from './styles/Banner.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { sliderAutoplay } from '@/widgets/sliders/utils/slice';
import { sliderStop } from '@/widgets/sliders/utils/slice';

const Banner = ({
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
  const [modalActionItem, setModalActionItem] = useState({});
  const autoplay = useSelector((state) => state.slider.autoplay);
  const dispatch = useDispatch();

  const handleShowModalAction = (id, sectionName) => {
    setModalActionItem((prev) => ({
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

  const releseDate = date?.split('-')[0];

  return (
    <div className={styles.banner}>
      <div className={styles.bannerItem}>
        <Card
          title={title || name}
          poster={`https://image.tmdb.org/t/p/w500/${poster}`}
          mediaType={mediaType}
          genere={genere}
          date={releseDate}
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
