import React from 'react';
import useStories from '@/shared/hooks/useStories';
import { StoriesBanner } from '@/features/stories';
import StoriesModalWindow from '@/features/stories/storiesModalWindow/ui/StoriesModalWindow';
import styles from './styles/Stories.module.css';

interface IMovieData {
  id: number;
  title: string;
  name?: string;
  vote_average: number;
  genre_ids: number[];
  release_date: string;
  media_type: string;
  backdrop_path: string;
}

interface ITrailersData {
  id: string;
  key: string;
  name: string;
}

interface ITrailers {
  movieId: number;
  trailer: ITrailersData[];
}

interface IStories {
  movieTrailers: ITrailers[];
  popularMovies: IMovieData[];
}

const Stories: React.FC = () => {
  const stories: IStories = useStories();

  return (
    <>
      <div className={styles.stories}>
        {stories.movieTrailers.length > 0 &&
          stories.movieTrailers.map((element, index) => {
            const movie = stories.popularMovies.find(
              (e) => e.id === element.movieId,
            );
            const movieKey = element.trailer?.[0]?.key;

            return movie ? (
              <StoriesBanner
                key={`${movie.id}-${index}`}
                image={movie.backdrop_path}
                title={movie.title}
                id={movie.id}
                movieKey={movieKey}
              />
            ) : null;
          })}
      </div>

      <StoriesModalWindow />
    </>
  );
};

export default Stories;
