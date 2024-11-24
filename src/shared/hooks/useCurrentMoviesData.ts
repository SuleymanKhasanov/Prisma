import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getMovieById } from '../api/api';

const useCurrentMoviesData = () => {
  const movieById = useSelector((state: any) => state.currentMovie);

  const [currentMovie, setCurrentMovie] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!movieById || movieById.length === 0) return;

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const movies = await Promise.all(
          movieById.map(
            async (item: { id: number; media_type: string }) => {
              const { id, media_type } = item;

              if (!id || !media_type) {
                console.error(
                  `Некорректные данные: id=${id}, media_type=${media_type}`,
                );
                return null;
              }

              return await getMovieById(media_type, id);
            },
          ),
        );

        setCurrentMovie(movies.filter((movie) => movie !== null));
      } catch (err) {
        console.error(err);
        setError('Не удалось загрузить данные о фильмах.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [movieById]);

  return { currentMovie, loading, error };
};

export default useCurrentMoviesData;
