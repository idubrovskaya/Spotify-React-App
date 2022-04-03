import styles from './User.module.css';

export interface IUser {
  image: string;
  displayName: string;
}

export const User = ({ image, displayName }: IUser) => {
  return (
    <div className={styles.userDetails}>
      <img src={image} alt='user' />
      <p>{displayName}</p>
    </div>
  );
};
