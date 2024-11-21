interface IMovieData {
  id: number;
  title?: string;
  name?: string;
  vote_average: number;
  poster_path: string;
  genre_ids: number[];
  release_date: string;
  media_type?: string;
}
export interface SliderProps {
  moviesAndShows: IMovieData[];
  children: (element: IMovieData) => React.ReactNode;
  autoplay: boolean;
}
