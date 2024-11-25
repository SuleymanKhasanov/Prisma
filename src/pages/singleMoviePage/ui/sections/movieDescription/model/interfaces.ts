export interface MovieDescriptionsProps {
  title: string;
  description: string;
  linkToMovie: string;
  overview: string;
  production_companies: ProductionCompany[];
}

export interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string | null; // Логотип может отсутствовать
}
