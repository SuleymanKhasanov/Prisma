import styles from './styles/Follback.module.css';
import follbackIcon from '@/shared/icons/follback.svg';

const Follback = () => {
  return (
    <div className={styles.follback}>
      <img className={styles.follbackIcon} src={follbackIcon} />
    </div>
  );
};

export default Follback;
