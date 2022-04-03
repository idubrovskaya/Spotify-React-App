import styles from './SearchResults.module.css';

export interface ISearchResults {
  image: string;
  trackName: string;
  artistName: string;
  albumName: string;
  previewUrl: string;
}

export const SearchResults = ({
  image,
  trackName,
  artistName,
  albumName,
  previewUrl,
}: ISearchResults) => {
  return (
    <div className={styles.track}>
      <img src={image} alt='album-image' />
      <p className={styles.artist}>{artistName}</p>

      <p className={styles.albumName}>{albumName}</p>
      <p className={styles.songName}>{trackName}</p>
      <audio src={previewUrl} controls />
    </div>
  );
};
