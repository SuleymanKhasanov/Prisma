import styles from './styles/ActionButton.module.css';

const ActionButton = () => {
  return (
    <div className={styles.actionButton}>
      <span className={styles.dott}></span>
      <span className={styles.dott}></span>
      <span className={styles.dott}></span>
    </div>
  );
};

export default ActionButton;
