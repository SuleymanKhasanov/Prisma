import { MovieCover } from '@/entities/movies/movieCoverBg';
import useCurrentMoviesData from '@/shared/hooks/useCurrentMoviesData';

const SingleMoviePage = () => {
  const movieData = useCurrentMoviesData();
  const currentMovieData = movieData.currentMovie;
  const latestMovie =
    currentMovieData && currentMovieData.length > 0
      ? currentMovieData[currentMovieData.length - 1]
      : null;

  console.log(latestMovie);
  return (
    <div>
      <MovieCover
        id={latestMovie?.id}
        title={latestMovie?.name || latestMovie?.title}
        description={latestMovie?.tagline}
        poster={latestMovie?.backdrop_path}
        linkToMovie={latestMovie?.homepage}
      />
    </div>
  );
};

export default SingleMoviePage;
