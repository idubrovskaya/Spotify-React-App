import styles from './MusicPlayer.module.css';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import { Slider } from '@material-ui/core';

export const MusicPlayer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.songDetails}>
        <img
          className={styles.albumArt}
          src='https://upload.wikimedia.org/wikipedia/ru/f/f0/Deadbyaprillosingyou.jpg'
          alt='album-image'
        />
        <div className={styles.songInfo}>
          <h4>Losing you</h4>
          <p>Dead by April</p>
        </div>
      </div>
      <div className={styles.playerControl}>
        <ShuffleOutlinedIcon className={styles.player} />
        <SkipPreviousOutlinedIcon className={styles.player} />
        <PlayCircleOutlinedIcon className={styles.player} />
        <SkipNextOutlinedIcon className={styles.player} />
        <RepeatOutlinedIcon className={styles.player} />
      </div>
      <div className={styles.volumeControl}>
        <QueueMusicOutlinedIcon />
        <VolumeUpOutlinedIcon />
        <Slider />
      </div>
    </div>
  );
};
