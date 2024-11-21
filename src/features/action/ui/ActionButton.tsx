import styles from './styles/ActionButton.module.css';
import { ActionButtonProps } from './modules/interfaces';

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  id,
}) => {
  return (
    <div className={styles.actionButton} onClick={onClick}>
      <span className={styles.dott}></span>
      <span className={styles.dott}></span>
      <span className={styles.dott}></span>
    </div>
  );
};

export default ActionButton;
