import styles from './NewReleases.module.css';

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
  return (
    <div onClick={onClick} className={styles.card}>
      <img src={image} />
      <p>{title}</p>
    </div>
  );
};
