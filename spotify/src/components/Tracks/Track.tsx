import styles from "./Track.module.css";

export interface ITrack {
  id: string;
  trackName: string;
  image?: string;
  artist: string;
  album?: string;
  preview: string;
  duration?: string;
  added?: string;
  index: number;
  onClick: () => void;
}

export const Track = ({
  image,
  trackName,
  artist,
  album,
  added,
  preview,
  index,
  onClick,
}: ITrack) => {
  return (
    <div className={styles.track} onClick={onClick}>
      <div className={styles.wrapper}>
        <p className={styles.index}>{index}</p>
        {image ? <img src={image} alt="album-image" /> : null}
        <div className={styles.trackInfo}>
          <p className={styles.trackName}>{trackName}</p>
          <p className={styles.artist}>{artist}</p>
        </div>
        <p className={styles.album}>{album}</p>
        <p className={styles.date}>
          {added?.slice(0, 10).split("-").reverse().join(".")}
        </p>
        <audio src={preview} controls />
      </div>
    </div>
  );
};
