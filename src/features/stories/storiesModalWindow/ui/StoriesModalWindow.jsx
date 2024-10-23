import { useSelector } from 'react-redux';
import styles from './styles/StoriesModalWindow.module.css';
import { useEffect, useState } from 'react';
import close from '@/shared/icons/close.svg';

const StoriesModalWindow = () => {
  const story = useSelector((state) => state.stories.currentStory);

  const [hideFrame, setHideFrame] = useState(false);

  useEffect(() => {
    if (story) {
      setHideFrame(true);
    }
  }, [story]);

  return (
    <>
      <div
        className={
          hideFrame === true
            ? styles.modalWindow
            : styles.modalWindowHide
        }
      >
        <button
          className={styles.buttonHide}
          onClick={() => setHideFrame(false)}
        >
          <img src={close} alt="" />
        </button>
        {story && (
          <iframe
            className={styles.iFrame}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${story.movieKey}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </>
  );
};

export default StoriesModalWindow;
