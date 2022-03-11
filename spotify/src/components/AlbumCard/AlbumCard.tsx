import styles from './AlbumCard.module.css';

export interface IAlbumCard {
  id: string;
  image: string;
  albumName: string;
  artistName: string;
  releaseDate: string;
}

export const AlbumCard = ({
  image,
  albumName,
  artistName,
  releaseDate,
}: IAlbumCard) => {
  return (
    <div className={styles.albumCard}>
      <div className={styles.albumImage}>
        <img src={image} />
      </div>
      <div className={styles.albumInfo}>
        <p className={styles.albumName}>{albumName}</p>
        <p className={styles.artistName}>{artistName}</p>
        <p className={styles.releaseDate}>{releaseDate}</p>
      </div>
    </div>
  );
};
