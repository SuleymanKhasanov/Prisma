export interface CardProps {
  mediaType: string;
  title: string | undefined;
  poster: string;
  genere: number[];
  date?: string;
}

export interface RaitingProps {
  rating?: number;
}