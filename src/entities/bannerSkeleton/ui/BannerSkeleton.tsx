import styles from './styles/BannerSkeleton.module.css';

const BannerSkeleton = ({ count = 1, size }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={styles.skeleton}>
          <div
            className={
              size === 'big' ? styles.bigBanner : styles.smallBanner
            }
          ></div>
          <div className={styles.textSkeleton}></div>
        </div>
      ))}
    </>
  );
};

export default BannerSkeleton;
