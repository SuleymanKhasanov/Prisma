import { useEffect, useState } from 'react';
import useFindMoviesAndShows from '../hooks/useFindMoviesAndShows';

const saveInWatchLaterMovies = () => {
  const fetchWatchLaterMovies = useFindMoviesAndShows();

  const [storedData, setStoredData] = useState<any[]>([]);
  const data = localStorage.getItem('watchLaterMovies');

  useEffect(() => {
    if (data) {
      setStoredData(JSON.parse(data));
    }
  }, [data]);

  const watchLater = fetchWatchLaterMovies.movieData.map(
    (element) => ({
      id: element.id,
      poster_path: element.poster_path,
      release_date: element.release_date,
      title: element.title,
      name: element.name,
      vote_average: element.vote_average,
      genres: element.genres,
    }),
  );

  localStorage.setItem(
    'watchLaterMovies',
    JSON.stringify(watchLater),
  );
};

export default saveInWatchLaterMovies;
