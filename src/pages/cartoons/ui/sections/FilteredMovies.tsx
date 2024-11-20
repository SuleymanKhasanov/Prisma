import React from 'react';
import BannerSkeleton from '@/entities/bannerSkeleton/ui/BannerSkeleton';
import { Banner } from '@/widgets/banner';

interface IFilteredMovies {
  id: number;
  title?: string;
  name?: string;
  vote_average: number;
  poster_path: string;
  genre_ids: number[];
  release_date: string;
  media_type: string;
}

// Типизация пропса filteredMovies
interface IFilteredMoviesProps {
  filteredMovies: IFilteredMovies[]; // Массив фильмов
}

const FilteredMovies: React.FC<IFilteredMoviesProps> = ({
  filteredMovies,
}) => {
  return (
    <>
      {filteredMovies.length > 0 ? (
        filteredMovies.map((element) => (
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

export default FilteredMovies;
