import React from 'react';
import { BannerSkeleton } from '@/widgets/banner';
import { Banner } from '@/widgets/banner';
import { IPopularMoviesProps } from '../../model/interfaces';

const PopularMovies: React.FC<IPopularMoviesProps> = ({
  popularMovies,
}) => {
  return (
    <>
      {popularMovies.length > 0 ? (
        popularMovies.map((element) => (
          <Banner
            key={element.id}
            mediaType="movie"
            title={element.title || element.name}
            rating={element.vote_average}
            poster={element.poster_path}
            genere={element.genre_ids}
            id={element.id}
            sectionName=""
            date={element.release_date}
          />
        ))
      ) : (
        <BannerSkeleton count={10} size="big" />
      )}
    </>
  );
};

export default PopularMovies;
