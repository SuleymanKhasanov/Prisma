import styles from './styles/ActionButton.module.css';

interface ActionButtonProps {
  onClick: () => void; // Тип для функции обработчика без аргументов и возвращаемого значения
}

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
