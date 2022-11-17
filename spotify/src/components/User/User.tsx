import { useContext } from 'react';
import { Context } from '../../App';
import styles from './User.module.css';

export interface IUser {
  image: string;
  displayName: string;
}

export const User = ({ image, displayName }: IUser) => {
  const { theme } = useContext(Context);
  return (
    <div className={styles.userDetails}>
      <img src={image} alt='user' />
      <p style={{ color: theme.userInfo }}>{displayName}</p>
    </div>
  );
};
