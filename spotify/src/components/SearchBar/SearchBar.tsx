import { useHistory } from 'react-router-dom';
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from 'react';
import styles from './SearchBar.module.css';
import { spotifyFetch } from '../../spotify';
import { IUser, User } from '../User/User';

export interface IInput {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export const SearchBar = ({ onChange, onKeyDown }: IInput) => {
  const history = useHistory();

  const [user, setUser] = useState<any>([]);

  useEffect(() => {
    spotifyFetch('/me').then((result) => setUser([result]));
  }, []);

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
      <div className={styles.userDetails}>
        <img src={user[0]?.images[0].url} alt='user_image' />
        <p>{user[0]?.display_name}</p>
      </div>
    </header>
  );
};
