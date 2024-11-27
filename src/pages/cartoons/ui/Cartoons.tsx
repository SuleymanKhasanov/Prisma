import { useEffect, useState } from 'react';
import useLoadMovies from '../utils/hooks/useLoadMovies';
import { BannerSkeleton } from '@/widgets/banner';
import { GenreFilter } from '@/features/genres/genreFilter';
import FilteredMovies from './sections/FilteredMovies';
import PopularMovies from './sections/PopularMovies';
import styles from './Cartoons.module.css';
import useFilterCartoonsByGenre from '@/features/genres/genreFilter/utils/hooks/useFilterCartoonsByGenre';

const Cartoons: React.FC = () => {
  // Используем хук для загрузки популярных фильмов
  const {
    popularMovies,
    isLoading: isPopularLoading,
    movieContainerRef,
  } = useLoadMovies();

  // Используем хук для фильтрации фильмов по жанрам
  const {
    movies: moviesByGenre,
    isLoading: isFilteredLoading,
    setPage: setGenrePage,
  } = useFilterCartoonsByGenre();

  const [isGenreSelected, setIsGenreSelected] =
    useState<boolean>(false);

  // Эффект для отслеживания изменения фильтров
  useEffect(() => {
    setIsGenreSelected(moviesByGenre.length > 0);
  }, [moviesByGenre]);

  // Обработчик прокрутки для загрузки следующей страницы
  const handleScroll = (e: Event) => {
    const target = e.target as HTMLElement; // Приведение к HTMLElement
    if (
      target.scrollHeight - target.scrollTop <=
      target.clientHeight + 500
    ) {
      if (isGenreSelected) {
        setGenrePage((prevPage) => prevPage + 1);
      }
    }
  };

  // Используем эффект для добавления обработчика прокрутки
  useEffect(() => {
    const container = movieContainerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () =>
      container?.removeEventListener('scroll', handleScroll);
  }, [isGenreSelected]);

  return (
    <section
      ref={movieContainerRef}
      className={`${styles.movie}`}
      style={{ overflowY: 'auto', maxHeight: '100vh' }}
    >
      <div className={styles.sectionTitleWrapper}>
        <h2 className={styles.sectionTitle}>Мультфильмы</h2>
      </div>
      <div className={styles.moviesContainer}>
        {isGenreSelected ? (
          <FilteredMovies filteredMovies={moviesByGenre} />
        ) : (
          <PopularMovies popularMovies={popularMovies} />
        )}

        {(isPopularLoading || isFilteredLoading) && (
          <BannerSkeleton count={40} size="big" />
        )}
      </div>
      <GenreFilter genereType={'movie'} />
    </section>
  );
};

export default Cartoons;
