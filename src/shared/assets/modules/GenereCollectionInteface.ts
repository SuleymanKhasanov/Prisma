interface Genre {
  id: number;
  name: string;
}

interface GenreCollection {
  genres: Genre[];
}

export default GenreCollection;
