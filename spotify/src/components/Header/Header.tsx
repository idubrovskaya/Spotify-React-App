import { useContext } from 'react';
import { Context } from '../../App';
import { useHistory } from 'react-router-dom';
import { UserInfo } from '../User/UserInfo';
import styles from './Header.module.css';
import backButton from './backButton.svg';
import nextButton from './next.svg';

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
            src={backButton}
            alt='button-back'
            style={{ filter: theme.buttons }}
          />
        </p>
        <p>
          <img
            src={nextButton}
            alt='button-next'
            style={{ filter: theme.buttons }}
          />
        </p>
      </div>
      <UserInfo />
    </header>
  );
};
