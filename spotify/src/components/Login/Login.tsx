import { loginUrl } from '../../spotify';
import styles from './Login.module.css';

export const Login = () => {
  return (
    <div className={styles.login}>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};
