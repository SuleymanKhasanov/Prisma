import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { showStories } from '../utils/slice';
import styles from './styles/StoriesBanner.module.css';
import { StoriesBannerProps } from './modules/interfaces';

const StoriesBanner: React.FC<StoriesBannerProps> = ({
  image,
  title,
  id,
  movieKey,
}) => {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Используем useCallback, чтобы избежать лишних пересозданий функции
  const handlerToGetStories = useCallback(
    (id: number, title: string, movieKey: string | undefined) => {
      const storiesId = { id, movieKey, title };
      dispatch(showStories(storiesId));
      setSelectedId(id);
    },
    [dispatch],
  );

  // Условие для обрезки названия фильма
  const truncatedTitle =
    title.length > 10 ? `${title.substring(0, 6)}...` : title;

  return (
    <div
      className={styles.storiesBanner}
      onClick={() => handlerToGetStories(id, title, movieKey)}
    >
      <div
        className={
          selectedId === id
            ? `${styles.wrapperNotActive}`
            : `${styles.wrapper}`
        }
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          alt={title}
          className={styles.storiesImg}
        />
      </div>
      <p className="title">{truncatedTitle}</p>
    </div>
  );
};

export default StoriesBanner;
