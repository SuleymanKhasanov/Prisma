import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import sidebarConfig from '@/shared/config/sidebarConfig';
import styles from './styles/Sidebar.module.css';

// Тип для элементов в конфигурации sidebarConfig
interface SidebarItem {
  id: string;
  text: string;
  icon: string;
  close?: string; // Путь к изображению для закрытия (не обязательно)
  to?: string; // URL для NavLink (не обязательно)
  isLink: boolean; // Если true, то элемент является ссылкой, если нет, то меню
}

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

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
          {sidebarConfig.map((item: SidebarItem) => (
            <li
              key={item.id}
              className={styles.sidebarItem}
              onClick={item.isLink ? undefined : handleShowSidebar}
            >
              {item.isLink ? (
                <NavLink
                  to={item.to || '#'}
                  style={({ isActive }) => ({
                    background: isActive ? '#113635' : 'inherit',
                  })}
                  className={styles.routerLink}
                >
                  <img
                    src={item.icon}
                    alt={item.text}
                    className={styles.sidebarIcon}
                  />
                  <span className={styles.sidebarItemText}>
                    {item.text}
                  </span>
                </NavLink>
              ) : (
                <div className={styles.sidebarMenu}>
                  <img
                    src={showSidebar ? item.close : item.icon}
                    alt={item.text}
                    className={styles.sidebarIcon}
                  />
                  <span className={styles.sidebarItemText}>
                    {item.text}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
