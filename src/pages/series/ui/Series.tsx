import React, { useEffect, useState } from 'react';
import useLoadMovies from '../utils/hooks/useLoadMovies';
import { BannerSkeleton } from '@/widgets/banner';
import { GenreFilter } from '@/features/genres/genreFilter';
import styles from './Series.module.css';
import useFilterSeriesByGenre from '@/features/genres/genreFilter/utils/hooks/useFilterSeriesByGenre';
import FilteredSeries from './sections/FilteredSeries';
import PopularSeries from './sections/PopularSeries';

const Series: React.FC = () => {
  const {
    popularShows,
    isLoading: isPopularLoading,
    movieContainerRef,
  } = useLoadMovies();

  const {
    series: moviesByGenre = [],
    isLoading: isFilteredLoading,
    setPage: setGenrePage,
  } = useFilterSeriesByGenre();

  const [isGenreSelected, setIsGenreSelected] =
    useState<boolean>(false);

  useEffect(() => {
    setIsGenreSelected(moviesByGenre.length > 0);
  }, [moviesByGenre]);

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
        <h2 className={styles.sectionTitle}>Сериалы и ТВ-шоу</h2>
      </div>
      <div className={styles.moviesContainer}>
        {isGenreSelected ? (
          <FilteredSeries filteredMovies={moviesByGenre} />
        ) : (
          <PopularSeries popularMovies={popularShows} />
        )}

        {(isPopularLoading || isFilteredLoading) && (
          <BannerSkeleton count={40} size="big" />
        )}
      </div>
      <GenreFilter genereType={'series'} />
    </section>
  );
};

export default Series;
