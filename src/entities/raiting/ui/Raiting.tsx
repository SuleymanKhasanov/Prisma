import styles from './styles/Raiting.module.css';

interface RaitingProps {
  rating?: number; // rating может быть числом или undefined
}

const Raiting: React.FC<RaitingProps> = ({ rating }) => {
  return (
    <>
      <span className={styles.raiting}>
        {rating !== undefined ? rating.toFixed(1) : '0.0'}
      </span>
    </>
  );
};

export default Raiting;
