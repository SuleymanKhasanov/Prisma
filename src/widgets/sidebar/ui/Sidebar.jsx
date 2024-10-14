import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/Sidebar.module.css';
import logo from '@/shared/icons/logo.svg';
import menu from '@/shared/icons/menu.svg';
import search from '@/shared/icons/search.svg';
import close from '@/shared/icons/close.svg';
import movies from '@/shared/icons/movies.svg';
import series from '@/shared/icons/series.svg';
import watchLater from '@/shared/icons/history.svg';
import cartoon from '@/shared/icons/cartoon.svg';
import anime from '@/shared/icons/anime.svg';
import folder from '@/shared/icons/folder.svg';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <aside
      className={styles.sidebar}
      style={{ width: showSidebar ? '250px' : '66px' }}
    >
      <nav className={styles.sidebarNavigation}>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarItem}>
            <NavLink to="/" className={styles.routerLink}>
              <img
                src={logo}
                alt="logo"
                className={styles.sidebarIcon}
              />
              <span className={styles.sidebarItemText}>Prisma</span>
            </NavLink>
          </li>

          <li
            className={styles.routerLink}
            onClick={handleShowSidebar}
          >
            <img
              src={showSidebar ? close : menu}
              alt="menu"
              className={styles.sidebarIcon}
            />
            <span className={styles.sidebarItemText}>Меню</span>
          </li>

          <li className={styles.sidebarItem}>
            <NavLink
              to="/search"
              activeStyle={{ background: '#093205' }}
              className={styles.routerLink}
            >
              <img
                src={search}
                alt="menu"
                className={styles.sidebarIcon}
              />
              <span className={styles.sidebarItemText}>Поиск</span>
            </NavLink>
          </li>

          <li className={styles.sidebarItem}>
            <NavLink
              to="/movies"
              activeStyle={{ background: '#093205' }}
              className={styles.routerLink}
            >
              <img
                src={movies}
                alt="movies"
                className={styles.sidebarIcon}
              />
              <span className={styles.sidebarItemText}>Фильмы</span>
            </NavLink>
          </li>

          <li className={styles.sidebarItem}>
            <NavLink
              to="/series"
              activeStyle={{ background: '#093205' }}
              className={styles.routerLink}
            >
              <img
                src={series}
                alt="series"
                className={styles.sidebarIcon}
              />
              <span className={styles.sidebarItemText}>Сериалы</span>
            </NavLink>
          </li>

          <li className={styles.sidebarItem}>
            <NavLink
              to="/cartoons"
              activeStyle={{ background: '#093205' }}
              className={styles.routerLink}
            >
              <img
                src={cartoon}
                alt="cartoon"
                className={styles.sidebarIcon}
              />
              <span className={styles.sidebarItemText}>
                Мультфильмы
              </span>
            </NavLink>
          </li>

          <li className={styles.sidebarItem}>
            <NavLink
              to="/anime"
              activeStyle={{ background: '#093205' }}
              className={styles.routerLink}
            >
              <img
                src={anime}
                alt="anime"
                className={styles.sidebarIcon}
              />
              <span className={styles.sidebarItemText}>Аниме</span>
            </NavLink>
          </li>

          <li className={styles.sidebarItem}>
            <NavLink
              to="/watch-later"
              activeStyle={{ background: '#093205' }}
              className={styles.routerLink}
            >
              <img
                src={watchLater}
                alt="watch later"
                className={styles.sidebarIcon}
              />
              <span className={styles.sidebarItemText}>
                Посмотреть позже
              </span>
            </NavLink>
          </li>

          <li className={styles.sidebarItem}>
            <NavLink
              to="/folder"
              activeStyle={{ background: '#093205' }}
              className={styles.routerLink}
            >
              <img
                src={folder}
                alt="folder"
                className={styles.sidebarIcon}
              />
              <span className={styles.sidebarItemText}>
                Мои коллекции
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
