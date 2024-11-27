import { Banner } from '@/widgets/banner';
import styles from './WatchLater.module.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const WatchLater = () => {
  const [storedData, setStoredData] = useState<any[]>([]);

  // Получаем ID фильмов для удаления из Redux
  const deleteMovieIds = useSelector(
    (state: any) => state.deleteMovie, // Ожидается массив ID для удаления
  );

  // Загружаем данные из localStorage только один раз при монтировании
  useEffect(() => {
    const data = localStorage.getItem('watchLaterMovies');
    if (data) {
      setStoredData(JSON.parse(data));
    }
  }, []);

  // Обновляем данные, когда изменяются deleteMovieIds
  useEffect(() => {
    if (deleteMovieIds.length > 0) {
      setStoredData((prevStoredData) => {
        const updatedData = prevStoredData.filter(
          (movie) => !deleteMovieIds.includes(movie.id),
        );

        // Обновляем localStorage только если данные изменились
        if (updatedData.length !== prevStoredData.length) {
          localStorage.setItem(
            'watchLaterMovies',
            JSON.stringify(updatedData),
          );
        }

        return updatedData;
      });
    }
  }, [deleteMovieIds]);

  return (
    <>
      {storedData.length > 0 ? (
        <>
          <div className={styles.sectionTitleWrapper}>
            <h2 className={styles.sectionTitle}>Посмотреть позже</h2>
          </div>
          <section className={styles.watchLaterSection}>
            {storedData.map((element) => (
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
            ))}
          </section>
        </>
      ) : (
        <div className={styles.title}>Нет сохранённых фильмов</div>
      )}
    </>
  );
};

export default WatchLater;
