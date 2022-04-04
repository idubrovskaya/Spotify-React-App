import { useContext } from 'react';
import { Context } from '../../App';
import { useHistory } from 'react-router-dom';
import { UserInfo } from '../User/UserInfo';
import styles from './Header.module.css';

export const Header = () => {
  const { theme } = useContext(Context);
  const history = useHistory();

  return (
    <header className={styles.header}>
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
      <UserInfo />
    </header>
  );
};
