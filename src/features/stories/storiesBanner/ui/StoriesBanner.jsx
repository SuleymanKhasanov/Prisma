import styles from './styles/StoriesBanner.module.css';
import { useDispatch } from 'react-redux';
import { showStories } from '../utils/slice';

const StoriesBanner = ({ image, title, id, movieKey }) => {
  const dispatch = useDispatch();

  const hanndlerToGetStories = (id, title, movieKey) => {
    const storiesId = {
      id,
      movieKey,
      title,
    };
    dispatch(showStories(storiesId));
  };

  return (
    <div
      className={styles.storiesBanner}
      onClick={() => hanndlerToGetStories(id, title, movieKey)}
    >
      <div className={styles.wrapper}>
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
