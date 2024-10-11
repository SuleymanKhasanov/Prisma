import styles from './styles/ActionButton.module.css';

const ActionButton = ({ onClick }) => {
  return (
    <div className={styles.actionButton} onClick={onClick}>
      <span className={styles.dott}></span>
      <span className={styles.dott}></span>
      <span className={styles.dott}></span>
    </div>
  );
};

export default ActionButton;
