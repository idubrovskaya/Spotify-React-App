import styles from './Genres.module.css';

export interface IGenresCard {
  image: string;
  title: string;
}

export const GenresCard = ({ image, title }: IGenresCard) => {
  return (
    <div className={styles.genres}>
      <img src={image} className={styles.genreImg} />
      <p className={styles.genreName}>{title}</p>
    </div>
  );
};
