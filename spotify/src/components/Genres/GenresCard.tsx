import styles from './Genres.module.css';

export interface IGenresCard {
  id: string;
  image: string;
  title: string;
  onClick: () => void;
}

export const GenresCard = ({ image, title, onClick }: IGenresCard) => {
  return (
    <div className={styles.genres} onClick={onClick}>
      <img src={image} className={styles.genreImg} alt='genre-image' />
      <p className={styles.genreName}>{title}</p>
    </div>
  );
};
