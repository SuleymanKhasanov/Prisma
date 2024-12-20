import styles from './Raiting.module.css';
import { RaitingProps } from '../../movieCard/model/interfaces';

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
