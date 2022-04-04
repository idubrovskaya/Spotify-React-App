import { useHistory } from 'react-router-dom';
import { ChangeEventHandler, KeyboardEventHandler } from 'react';
import styles from './SearchBar.module.css';
import { UserInfo } from '../User/UserInfo';
import { Context } from '../../App';
import { useContext } from 'react';
export interface IInput {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export const SearchBar = ({ onChange, onKeyDown }: IInput) => {
  const history = useHistory();

  const { theme } = useContext(Context);

  return (
    <header
      className={styles.header}
      style={{ background: theme.backgroundMain }}
    >
      <div className={styles.buttons}>
        <p
          onClick={() => {
            history.goBack();
          }}
        >
          <img
            src='img/backButton.svg'
            alt='button-back'
            style={{ filter: theme.buttons }}
          />
        </p>
        <p>
          <img
            src='img/next.svg'
            alt='button-next'
            style={{ filter: theme.buttons }}
          />
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
      <UserInfo />
    </header>
  );
};
