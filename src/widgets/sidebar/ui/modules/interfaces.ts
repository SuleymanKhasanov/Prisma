// Тип для элементов в конфигурации sidebarConfig
export interface SidebarItem {
  id: string;
  text: string;
  icon: string;
  close?: string; // Путь к изображению для закрытия (не обязательно)
  to?: string; // URL для NavLink (не обязательно)
  isLink: boolean; // Если true, то элемент является ссылкой, если нет, то меню
}
