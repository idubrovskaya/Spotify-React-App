import styles from './NewReleases.module.css';
import { Context } from '../../App';
import { useContext } from 'react';

export interface INewReleasesCard {
  id: string;
  image: string;
  title?: string;
  onClick: () => void;
}

export const NewReleasesCard = ({
  image,
  title,
  onClick,
}: INewReleasesCard) => {
  const { theme } = useContext(Context);

  return (
    <div onClick={onClick} className={styles.card}>
      <img src={image} />
      <p style={{ color: theme.newReleasesTextCard }}>{title}</p>
    </div>
  );
};
