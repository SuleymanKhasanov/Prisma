export interface BannerSkeletonProps {
  count?: number;
  size?: 'big' | 'small';
}

export interface BannerType {
  mediaType: string;
  title?: string;
  rating: number;
  poster: string;
  genere: number[];
  name?: string;
  id: number;
  sectionName: string;
  date: string;
}

// Тип для состояния modalActionItem
export interface ModalActionItem {
  [key: number]: boolean;
}
