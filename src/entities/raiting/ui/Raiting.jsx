import styles from './styles/Raiting.module.css';
const Raiting = ({ rating }) => {
  return (
    <>
      <span className={styles.raiting}>
        {rating !== undefined ? rating.toFixed(1) : '0.0'}
      </span>
    </>
  );
};

export default Raiting;
