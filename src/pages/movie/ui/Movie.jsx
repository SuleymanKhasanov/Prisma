import React, { useEffect, useState } from 'react';
import useLoadMovies from '../utils/hooks/useLoadMovies';
import BannerSkeleton from '@/entities/bannerSkeleton/ui/BannerSkeleton';
import { GenreFilter } from '@/features/genreFilter';
import FilteredMovies from './FilteredMovies';
import PopularMovies from './PopularMovies';
import styles from './styles/Movie.module.css';
import useFilterMoviesByGenre from '@/features/genreFilter/utils/hooks/useFilterMoviesByGenre';

const Movie = () => {
  const { popularMovies, isLoading, movieContainerRef } =
    useLoadMovies();
  const filteredMovies = useFilterMoviesByGenre();

  const [moviesByGenre, setMoviesByGenre] = useState([]);

  useEffect(() => {
    if (filteredMovies.length > 0) {
      setMoviesByGenre(filteredMovies);
    }
  }, [filteredMovies]);

  return (
    <>
      <section
        ref={movieContainerRef}
        className={`${styles.movie}`}
        style={{ overflowY: 'auto', maxHeight: '100vh' }}
      >
        <div className={styles.sectionTitleWrapper}>
          <h2 className={styles.sectionTitle}>Популярные фильмы</h2>
        </div>
        <div className={styles.moviesContainer}>
          {moviesByGenre.length > 0 ? (
            <FilteredMovies filteredMovies={filteredMovies} />
          ) : (
            <PopularMovies popularMovies={popularMovies} />
          )}

          {isLoading && <BannerSkeleton count={10} size="big" />}
        </div>
        <GenreFilter />
      </section>
    </>
  );
};

export default Movie;
