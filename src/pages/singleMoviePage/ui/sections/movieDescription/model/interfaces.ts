interface Cast {
  cast_id: number;
  profile_path: string;
  name: string;
}

export interface MovieDescriptionsProps {
  title: string;
  description: string;
  linkToMovie: string;
  overview: string;
  production_companies: ProductionCompany[];
  cast: Cast[];
}

export interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string | null; // Логотип может отсутствовать
}
