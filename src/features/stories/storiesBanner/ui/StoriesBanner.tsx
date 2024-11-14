import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showStories } from '../utils/slice';
import styles from './styles/StoriesBanner.module.css';

const StoriesBanner = ({ image, title, id, movieKey }) => {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);

  const handlerToGetStories = (id, title, movieKey) => {
    const storiesId = { id, movieKey, title };
    dispatch(showStories(storiesId));
    setSelectedId(id);
  };

  return (
    <div
      className={styles.storiesBanner}
      onClick={() => handlerToGetStories(id, title, movieKey)}
    >
      <div
        className={
          selectedId === id ? styles.wraperNotActive : styles.wrapper
        }
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${image}`}
          alt={title}
          className={styles.storiesImg}
        />
      </div>
      <p className="title">
        {title.length > 10
          ? title.substring(0, 10 - 3) + '...'
          : title}
      </p>
    </div>
  );
};

export default StoriesBanner;
