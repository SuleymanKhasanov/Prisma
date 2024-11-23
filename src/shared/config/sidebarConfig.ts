import logo from '@/shared/icons/logo.svg';
import menu from '@/shared/icons/menu.svg';
import search from '@/shared/icons/search.svg';
import movies from '@/shared/icons/movies.svg';
import series from '@/shared/icons/series.svg';
import watchLater from '@/shared/icons/history.svg';
import cartoon from '@/shared/icons/cartoon.svg';
import anime from '@/shared/icons/anime.svg';
import folder from '@/shared/icons/folder.svg';
import close from '@/shared/icons/close.svg';

interface ISidebarConfig {
  id: string;
  to?: string;
  icon: string;
  text: string;
  isLink: boolean;
  close?: string;
}

const sidebarConfig: ISidebarConfig[] = [
  {
    id: 'logo',
    to: '/',
    icon: logo,
    text: 'Prisma',
    isLink: true,
  },
  {
    id: 'menu',
    icon: menu,
    text: 'Меню',
    isLink: false,
    close: close,
  },
  {
    id: 'search',
    to: '/search',
    icon: search,
    text: 'Поиск',
    isLink: true,
  },
  {
    id: 'movies',
    to: '/movies',
    icon: movies,
    text: 'Фильмы',
    isLink: true,
  },
  {
    id: 'series',
    to: '/series',
    icon: series,
    text: 'Сериалы',
    isLink: true,
  },
  {
    id: 'cartoons',
    to: '/cartoons',
    icon: cartoon,
    text: 'Мультфильмы',
    isLink: true,
  },
  {
    id: 'watch-later',
    to: '/watch-later',
    icon: watchLater,
    text: 'Посмотреть позже',
    isLink: true,
  },
  {
    id: 'collections',
    to: '/collections',
    icon: folder,
    text: 'Мои коллекции',
    isLink: true,
  },
];

export default sidebarConfig;
