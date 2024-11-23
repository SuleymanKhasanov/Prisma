import { Banner } from '@/widgets/banner';
import styles from './styles/WatchLater.module.css';
import { useEffect, useState } from 'react';

const WatchLater = () => {
  const [storedData, setStoredData] = useState<any[]>([]);

  const data = localStorage.getItem('watchLaterMovies');

  useEffect(() => {
    if (data) {
      setStoredData(JSON.parse(data));
    }
  }, [data]);

  console.log(storedData);
  return (
    <>
      <div className={styles.sectionTitleWrapper}>
        <h2 className={styles.sectionTitle}>Посмотреть позже</h2>
      </div>

      <section className={styles.watchLaterSection}>
        {storedData.length > 0 ? (
          storedData.map((element) => (
            <Banner
              key={element.id}
              mediaType="movie"
              title={element.title || element.name}
              rating={element.vote_average}
              poster={element.poster_path}
              genere={element.genre_ids}
              id={element.id}
              sectionName="watchLater"
              date={element.release_date}
            />
          ))
        ) : (
          <div className={styles.title}>
            Нет сохраненых фильмов, для просмотра позже
          </div>
        )}
      </section>
    </>
  );
};

export default WatchLater;
