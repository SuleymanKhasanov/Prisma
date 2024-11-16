import React from 'react';
import BannerSkeleton from '@/entities/bannerSkeleton/ui/BannerSkeleton';
import { Banner } from '@/widgets/banner';

interface IPopularMovie {
  id: number;
  title?: string;
  name?: string;
  vote_average: number;
  poster_path: string;
  genre_ids: number[];
  release_date: string;
  media_type: string;
}

// Типизация пропсов компонента
interface IPopularMoviesProps {
  popularMovies: IPopularMovie[]; // Массив популярных фильмов
}

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
