import styles from './Playlist.module.css';

export interface IPlaylist {
  id: string;
  image: string;
  playlistName: string;
  description: string;
  onClick: () => void;
}

export const Playlist = ({
  image,
  playlistName,
  description,
  onClick,
}: IPlaylist) => {
  return (
    <div className={styles.playlist} onClick={onClick}>
      <img src={image} alt='playlist' className={styles.image} />
      <div className={styles.playlistInfo}>
        <p className={styles.playlistName}>{playlistName}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
