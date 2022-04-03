import { useHistory } from 'react-router-dom';
import { UserInfo } from '../User/UserInfo';
import styles from './Header.module.css';

export const Header = () => {
  const history = useHistory();

  return (
    <header className={styles.header}>
      <div className={styles.buttons}>
        <p
          onClick={() => {
            history.goBack();
          }}
        >
          <img src='img/backButton.svg' alt='button-back' />
        </p>
        <p>
          <img src='img/next.svg' alt='button-next' />
        </p>
      </div>
      <UserInfo />
    </header>
  );
};
