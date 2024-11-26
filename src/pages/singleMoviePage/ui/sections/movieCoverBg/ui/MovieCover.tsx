import styles from './MovieCover.module.css';
import { MovieCoverProps } from '../model/interfaces';
import { Raiting } from '@/entities/movies';
import { ActionButton } from '@/features/action';
import { ActionItem } from '@/features/action';
import { useState } from 'react';

interface ModalActionItem {
  [key: number]: boolean;
}

const MovieCover = ({
  title,
  poster,
  raiting,
  id,
  releaseDate,
}: MovieCoverProps) => {
  const [modalActionItem, setModalActionItem] =
    useState<ModalActionItem>({});

  const handleShowModalAction = (id: number) => {
    setModalActionItem((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={styles.movieCover}>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster}`}
        alt={title}
        className={styles.moviePoster}
      />
      <div className={styles.bannerAction}>
        <Raiting rating={raiting} />
        <ActionButton
          onClick={() => handleShowModalAction(id)}
          id={id}
        />

        {modalActionItem[id] && (
          <ActionItem
            id={id}
            media_type={releaseDate ? 'movie' : 'tv'}
            sectionName=""
          />
        )}
      </div>
    </div>
  );
};

export default MovieCover;
