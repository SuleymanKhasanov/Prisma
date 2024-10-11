import { Card } from '@/entities/card';
import { Raiting } from '@/entities/raiting';
import { ActionButton } from '@/features/actionButton';
import styles from './styles/Banner.module.css';

const Banner = ({
  mediaType,
  title,
  rating,
  poster,
  genere,
  name,
}) => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerItem}>
        <Card
          title={title || name}
          poster={`https://image.tmdb.org/t/p/w500/${poster}`}
          mediaType={mediaType}
          genere={genere}
        />
      </div>
      <div className={styles.bannerAction}>
        <Raiting rating={rating} />
        <ActionButton />
      </div>
    </div>
  );
};

export default Banner;
