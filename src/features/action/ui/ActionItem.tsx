import styles from './styles/ActionItem.module.css';
import watchLater from '@/shared/icons/history.svg';
import folder from '@/shared/icons/folder.svg';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToWatchLater } from '../utils/slice';
import saveInWatchLaterMovies from '@/shared/utils/watchLaterStorage';

interface ActionItemProps {
  id: number;
  media_type: string;
}

const ActionItem: React.FC<ActionItemProps> = ({
  id,
  media_type,
}) => {
  const [watchLaterId, setWatchLaterId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (watchLaterId !== 0) {
      dispatch(addToWatchLater({ id: id, media_type: media_type }));
    }
  }, [watchLaterId]);

  saveInWatchLaterMovies();

  return (
    <ul className={styles.actionList}>
      <li
        className={styles.actionItem}
        onClick={() => setWatchLaterId(id)}
      >
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
        <span>Создать коллекцию</span>
      </li>
    </ul>
  );
};

export default ActionItem;
