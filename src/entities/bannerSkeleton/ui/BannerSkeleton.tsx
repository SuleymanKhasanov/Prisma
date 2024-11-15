import styles from './styles/BannerSkeleton.module.css';

interface BannerSkeletonProps {
  count?: number; // Количество скелетонов, опциональный параметр (по умолчанию 1)
  size?: 'big' | 'small'; // Размер баннера, может быть только 'big' или 'small'
}

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
