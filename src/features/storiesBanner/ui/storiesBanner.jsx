import styles from './styles/StoriesBanner.module.css';

const StoriesBanner = ({ image, title, id, movieId }) => {
  return (
    <div className={styles.storiesBanner}>
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
