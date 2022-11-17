import styles from './SwitchThemeToggle.module.css';

interface ISwitch {
  inputChecked: boolean;
  onClick: () => void;
}

export const SwitchThemeToggle = ({ inputChecked, onClick }: ISwitch) => {
  return (
    <div className={styles.switchCheckbox}>
      <label className={styles.switch}>
        <input type='checkbox' onClick={onClick} checked={inputChecked} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};
