import React, { useEffect, useState } from 'react';
import useLoadMovies from '../utils/hooks/useLoadMovies';
import BannerSkeleton from '@/entities/bannerSkeleton/ui/BannerSkeleton';
import { GenreFilter } from '@/features/genreFilter';
import FilteredMovies from './FilteredMovies';
import PopularMovies from './PopularMovies';
import styles from './styles/Movie.module.css';
import useFilterMoviesByGenre from '@/features/genreFilter/utils/hooks/useFilterMoviesByGenre';

const Movie = () => {
  const {
    popularMovies,
    isLoading: isPopularLoading,
    movieContainerRef,
    setPage: setPopularPage,
  } = useLoadMovies();
  const {
    movies: moviesByGenre,
    isLoading: isFilteredLoading,
    setPage: setGenrePage,
  } = useFilterMoviesByGenre();
  const [isGenreSelected, setIsGenreSelected] = useState(false);

  useEffect(() => {
    setIsGenreSelected(moviesByGenre.length > 0);
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
        <h2 className={styles.sectionTitle}>Фильмы</h2>
      </div>
      <div className={styles.moviesContainer}>
        {isGenreSelected ? (
          <FilteredMovies filteredMovies={moviesByGenre} />
        ) : (
          <PopularMovies
            popularMovies={popularMovies}
            mediaType={'movie'}
          />
        )}

        {(isPopularLoading || isFilteredLoading) && (
          <BannerSkeleton count={40} size="big" />
        )}
      </div>
      <GenreFilter genereType={'movie'} />
    </section>
  );
};

export default Movie;
