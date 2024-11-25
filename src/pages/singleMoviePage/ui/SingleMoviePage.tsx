import { MovieCover } from './sections/movieCoverBg';
import useCurrentMoviesData from '@/shared/hooks/useCurrentMoviesData';
import MovieDescription from './sections/movieDescription/MovieDesctiption';
import styles from './SingleMoviePage.module.css';

const SingleMoviePage = () => {
  const movieData = useCurrentMoviesData();
  const currentMovieData = movieData.currentMovie;
  const latestMovie =
    currentMovieData && currentMovieData.length > 0
      ? currentMovieData[currentMovieData.length - 1]
      : null;

  console.log(latestMovie);
  return (
    <div className={styles.movieContent}>
      <MovieCover
        title={latestMovie?.name || latestMovie?.title}
        poster={latestMovie?.backdrop_path}
      />
      <MovieDescription
        title={latestMovie?.name || latestMovie?.title}
        description={latestMovie?.tagline}
        linkToMovie={latestMovie?.homepage}
        overview={latestMovie?.overview}
        production_companies={latestMovie?.production_companies}
      />
    </div>
  );
};

export default SingleMoviePage;
