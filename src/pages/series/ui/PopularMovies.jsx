import React from 'react';
import BannerSkeleton from '@/entities/bannerSkeleton/ui/BannerSkeleton';
import { Banner } from '@/widgets/banner';

const PopularMovies = ({ popularMovies }) => {
  return (
    <>
      {popularMovies.length > 0 ? (
        popularMovies.map((element) => (
          <Banner
            key={element.id}
            mediaType="tv"
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
