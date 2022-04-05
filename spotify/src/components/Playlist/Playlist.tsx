import styles from './Playlist.module.css';
import { Context } from '../../App';
import { useContext } from 'react';

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
  const { theme } = useContext(Context);

  return (
    <div
      className={styles.playlist}
      onClick={onClick}
      style={{ background: theme.playlistCard }}
    >
      <img src={image} alt='playlist' className={styles.image} />
      <div className={styles.playlistInfo}>
        <p className={styles.playlistName}>{playlistName}</p>
        <p
          className={styles.description}
          style={{ color: theme.playlistDescription }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
