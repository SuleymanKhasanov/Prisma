interface Movies {
  id: number;
  title?: string;
  name?: string;
  vote_average: number;
  poster_path: string;
  genre_ids: number[];
  release_date: string;
  media_type: string;
}

export interface IFilteredMoviesProps {
  filteredMovies: Movies[]; // Массив фильмов
}

export interface IPopularMoviesProps {
  popularMovies: Movies[]; // Массив популярных фильмов
}
