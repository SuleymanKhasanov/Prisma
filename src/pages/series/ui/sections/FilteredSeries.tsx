import { BannerSkeleton } from '@/widgets/banner';
import { Banner } from '@/widgets/banner';
import { IFilteredMoviesProps } from './modules/interfaces';

const FilteredSeries: React.FC<IFilteredMoviesProps> = ({
  filteredMovies,
}) => {
  return (
    <>
      {filteredMovies.length > 0 ? (
        filteredMovies.map((element) => (
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

export default FilteredSeries;
