import styles from './styles/ActionItem.module.css';
import watchLater from '@/shared/icons/history.svg';
import folder from '@/shared/icons/folder.svg';

const ActionItem = () => {
  return (
    <ul className={styles.actionList}>
      <li className={styles.actionItem}>
        <img
          src={watchLater}
          alt="watch later"
          className={styles.sidebarIcon}
        />
        <span>Посмотреть позже</span>
      </li>
      <li className={styles.actionItem}>
        <img
          src={folder}
          alt="folder"
          className={styles.sidebarIcon}
        />
        <span>Добавить в коллекцию</span>
      </li>
    </ul>
  );
};

export default ActionItem;
