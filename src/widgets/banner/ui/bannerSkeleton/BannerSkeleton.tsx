import styles from './styles/BannerSkeleton.module.css';
import { BannerSkeletonProps } from './modules/interfaces';

const BannerSkeleton: React.FC<BannerSkeletonProps> = ({
  count = 1,
  size,
}) => {
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
