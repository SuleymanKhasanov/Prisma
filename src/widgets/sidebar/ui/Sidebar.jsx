import { useState } from 'react';
import styles from './styles/Sidebar.module.css';
import logo from './icons/logo.svg';
import menu from './icons/menu.svg';
import close from './icons/close.svg';
import movies from './icons/movies.svg';
import series from './icons/series.svg';
import watchLater from './icons/history.svg';
import cartoon from './icons/cartoon.svg';
import anime from './icons/anime.svg';
import folder from './icons/folder.svg';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const hanndleShowSidebar = () => {
    if (!showSidebar) {
      setShowSidebar(true);
    } else setShowSidebar(false);
  };
  return (
    <aside
      className={styles.sidebar}
      style={{ width: showSidebar ? '250px' : '66px' }}
    >
      <nav className={styles.sidebarNavigation}>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarItem}>
            <img
              src={logo}
              alt="logo"
              className={styles.sidebarIcon}
            />
            <span className={styles.sidebarItemText}>Prisma</span>
          </li>
          <li
            className={styles.sidebarItem}
            onClick={hanndleShowSidebar}
          >
            <img
              src={showSidebar ? close : menu}
              alt="menu"
              className={styles.sidebarIcon}
            />
            <span className={styles.sidebarItemText}>Меню</span>
          </li>
          <li className={styles.sidebarItem}>
            <img
              src={movies}
              alt="movies"
              className={styles.sidebarIcon}
            />
            <span className={styles.sidebarItemText}>Фильмы</span>
          </li>
          <li className={styles.sidebarItem}>
            <img
              src={series}
              alt="series"
              className={styles.sidebarIcon}
            />
            <span className={styles.sidebarItemText}>Сериалы</span>
          </li>
          <li className={styles.sidebarItem}>
            <img
              src={cartoon}
              alt="cartoon"
              className={styles.sidebarIcon}
            />
            <span className={styles.sidebarItemText}>Мультфилмы</span>
          </li>
          <li className={styles.sidebarItem}>
            <img
              src={anime}
              alt="anime"
              className={styles.sidebarIcon}
            />
            <span className={styles.sidebarItemText}>Аниме</span>
          </li>
          <li className={styles.sidebarItem}>
            <img
              src={watchLater}
              alt="watch later"
              className={styles.sidebarIcon}
            />
            <span className={styles.sidebarItemText}>
              Посмотреть позже
            </span>
          </li>
          <li className={styles.sidebarItem}>
            <img
              src={folder}
              alt="folder"
              className={styles.sidebarIcon}
            />
            <span className={styles.sidebarItemText}>
              Мои коллекции
            </span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
