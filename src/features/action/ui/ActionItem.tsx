import styles from './ActionItem.module.css';
import watchLater from '@/shared/icons/history.svg';
import bin from '@/shared/icons/bin.svg';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToWatchLater } from '../utils/slice';
import saveInWatchLaterMovies from '@/shared/utils/watchLaterStorage';
import { deleteMovieFromWatchLater } from '../utils/sliceDeleteMovie';

interface ActionItemProps {
  id: number;
  media_type: string;
  sectionName?: string;
}

const ActionItem: React.FC<ActionItemProps> = ({
  id,
  media_type,
  sectionName,
}) => {
  const [watchLaterId, setWatchLaterId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (watchLaterId !== 0) {
      dispatch(addToWatchLater({ id: id, media_type: media_type }));
    }
  }, [watchLaterId]);

  saveInWatchLaterMovies();

  const [deleteMovie, setDeleteMovie] = useState(0);

  useEffect(() => {
    if (deleteMovie !== 0) {
      dispatch(deleteMovieFromWatchLater(id));
    }
  }, [deleteMovie]);

  saveInWatchLaterMovies();

  return (
    <ul className={styles.actionList}>
      {sectionName === 'watchLater' ? (
        <li
          className={styles.actionItem}
          onClick={() => setDeleteMovie(id)}
        >
          <img
            src={bin}
            alt="watch later"
            className={styles.sidebarIcon}
          />
          <span>Удалить</span>
        </li>
      ) : (
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
      )}
    </ul>
  );
};

export default ActionItem;
