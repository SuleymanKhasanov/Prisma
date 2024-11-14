import React, { useEffect, useState } from 'react';
import useLoadMovies from '../utils/hooks/useLoadMovies';
import BannerSkeleton from '@/entities/bannerSkeleton/ui/BannerSkeleton';
import { GenreFilter } from '@/features/genreFilter';
import styles from './styles/Series.module.css';
import useFilterSeriesByGenre from '@/features/genreFilter/utils/hooks/useFilterSeriesByGenre';
import FilteredSeries from './sections/FilteredSeries';
import PopularSeries from './sections/PopularSeries';

const Series = () => {
  const {
    popularShows,
    isLoading: isPopularLoading,
    movieContainerRef,
    setPage: setPopularPage,
  } = useLoadMovies();
  const {
    series: moviesByGenre = [],
    isLoading: isFilteredLoading,
    setPage: setGenrePage,
  } = useFilterSeriesByGenre();

  const [isGenreSelected, setIsGenreSelected] = useState(false);

  useEffect(() => {
    if (moviesByGenre && Array.isArray(moviesByGenre)) {
      setIsGenreSelected(moviesByGenre.length > 0);
    }
  }, [moviesByGenre]);

  const handleScroll = (e) => {
    const target = e.target;
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
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () =>
        container.removeEventListener('scroll', handleScroll);
    }
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
          <PopularSeries
            popularMovies={popularShows}
            mediaType={'tv'}
          />
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
