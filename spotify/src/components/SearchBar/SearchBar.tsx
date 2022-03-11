import { useHistory } from 'react-router-dom';
import { ChangeEventHandler, KeyboardEventHandler } from 'react';
import styles from './SearchBar.module.css';

export interface IInput {
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export const SearchBar = ({ onChange, onKeyDown }: IInput) => {
  const history = useHistory();

  return (
    <header className={styles.header}>
      <div className={styles.buttons}>
        <p
          onClick={() => {
            history.goBack();
          }}
        >
          <img src='img/backButton.svg' />
        </p>
        <p>
          <img src='img/next.svg' />
        </p>
      </div>
      <div className={styles.search}>
        <input
          type='text'
          placeholder='Artists,songs or podcasts'
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
      <div className={styles.userDetails}></div>
    </header>
  );
};
