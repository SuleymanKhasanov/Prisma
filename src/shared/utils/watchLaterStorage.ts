import { useEffect, useState } from 'react';
import useFindMoviesAndShows from '../hooks/useFindMoviesAndShows';
import { useSelector } from 'react-redux';

const saveInWatchLaterMovies = () => {
  const fetchWatchLaterMovies = useFindMoviesAndShows();

  // Получаем ID фильмов для удаления из Redux
  const deleteMovieIds = useSelector(
    (state: any) => state.deleteMovie, // Ожидается массив ID для удаления
  );

  const [storedData, setStoredData] = useState<any[]>([]);
  const data = localStorage.getItem('watchLaterMovies');

  // Загружаем данные из localStorage
  useEffect(() => {
    if (data) {
      setStoredData(JSON.parse(data));
    }
  }, [data]);

  // Формируем список фильмов из текущих данных
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

  useEffect(() => {
    // Удаляем фильмы, ID которых есть в deleteMovieIds
    const filteredData = storedData.filter(
      (movie) => !deleteMovieIds.includes(movie.id),
    );

    // Фильтруем, чтобы не добавлять дублирующиеся фильмы
    const uniqueMovies = watchLater.filter(
      (movie) =>
        !filteredData.some(
          (storedMovie) => storedMovie.id === movie.id,
        ),
    );

    if (
      uniqueMovies.length > 0 ||
      filteredData.length !== storedData.length
    ) {
      const updatedMovies = [...filteredData, ...uniqueMovies];
      setStoredData(updatedMovies);
      localStorage.setItem(
        'watchLaterMovies',
        JSON.stringify(updatedMovies),
      );
    }
  }, [watchLater, storedData, deleteMovieIds]);
};

export default saveInWatchLaterMovies;
