import styles from './ActionButton.module.css';
import { ActionButtonProps } from '../model/interfaces';

const ActionButton: React.FC<ActionButtonProps> = ({ onClick }) => {
  return (
    <div className={styles.actionButton} onClick={onClick}>
      <span className={styles.dott}></span>
      <span className={styles.dott}></span>
      <span className={styles.dott}></span>
    </div>
  );
};

export default ActionButton;
