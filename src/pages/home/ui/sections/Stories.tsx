import React from 'react';
import useStories from '@/shared/hooks/useStories';
import { StoriesBanner } from '@/features/stories';
import StoriesModalWindow from '@/features/stories/storiesModalWindow/ui/StoriesModalWindow';
import styles from './styles/Stories.module.css';

const Stories: React.FC = () => {
  const stories = useStories();

  return (
    <>
      <div className={styles.stories}>
        {stories.movieTrailers.length > 0 &&
          stories.movieTrailers.map((element, index) => {
            const movie = stories.popularMovies.find(
              (e) => e.id === element.movieId,
            );
            const movieKey = element.trailer?.[0]?.key; // Обработанный key

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
