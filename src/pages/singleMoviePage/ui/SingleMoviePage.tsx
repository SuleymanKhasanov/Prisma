import { MovieCover } from './sections/movieCoverBg';
import useCurrentMoviesData from '@/shared/hooks/useCurrentMoviesData';
import MovieDescription from './sections/movieDescription/MovieDesctiption';
import styles from './SingleMoviePage.module.css';
import { useSelector } from 'react-redux';
import { useGetCastsQuery } from '@/shared/api/apiSlice';
import { RootState } from '@/app/store/store';

const SingleMoviePage = () => {
  const movieData = useCurrentMoviesData();
  const currentMovieData = movieData.currentMovie;
  const latestMovie =
    currentMovieData && currentMovieData.length > 0
      ? currentMovieData[currentMovieData.length - 1]
      : null;

  const mediatypeAndId = useSelector(
    (state: RootState) => state.currentMovie,
  );

  const { data } = useGetCastsQuery({
    media_type: mediatypeAndId[mediatypeAndId.length - 1]?.media_type,
    id: mediatypeAndId[mediatypeAndId.length - 1]?.id,
  });

  return (
    <div className={styles.movieContent}>
      <MovieCover
        title={latestMovie?.name || latestMovie?.title}
        poster={latestMovie?.backdrop_path}
        raiting={latestMovie?.vote_average}
        id={latestMovie?.id}
        releaseDate={latestMovie?.release_date}
      />
      <MovieDescription
        title={latestMovie?.name || latestMovie?.title}
        description={latestMovie?.tagline}
        linkToMovie={latestMovie?.homepage}
        overview={latestMovie?.overview}
        production_companies={latestMovie?.production_companies}
        cast={data?.cast}
      />
    </div>
  );
};

export default SingleMoviePage;
