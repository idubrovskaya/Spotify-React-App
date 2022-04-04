import { useEffect, useRef, useState, useContext } from 'react';
import { Context } from '../../App';

import styles from './MusicPlayer.module.css';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import PauseCircleOutlinedIcon from '@mui/icons-material/PauseCircleOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import { Slider } from '@material-ui/core';

export const MusicPlayer = ({ imgSrc, artist, songTitle, songSrc }: any) => {
  const localToken = localStorage.getItem('access_token');

  const { theme } = useContext(Context);

  // State
  const [songIndex, setSongIndex] = useState(0);
  const [songProgress, setSongProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Refs
  const audioRef = useRef(new Audio(songSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      //очищаем, когда трек прекратил играть
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(songSrc);
    setSongProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [songIndex]);

  const startTimer = () => {
    // clearInterval(intervalRef.current);
    // intervalRef.current = setInterval(() => {
    //   if (audioRef.current.ended) {
    //     toNextTrack();
    //   } else {
    //     setSongProgress(audioRef.current.currentTime);
    //   }
    // }, [1000]);
  };

  const playPauseTrack = () => {
    console.log('TODO play pause');
  };
  // как передать песни из списка ?
  const toPrevTrack = () => {
    // if (songIndex - 1 < 0) {
    //   setSongIndex(song.length - 1);
    // } else {
    //   setSongIndex(songIndex - 1);
    // }
    console.log('TODO go to prev');
  };

  const toNextTrack = () => {
    // if (songIndex < song.length - 1) {
    //   setSongIndex(songIndex + 1);
    // } else {
    //   setSongIndex(0);
    // }
    console.log('TODO go to next');
  };

  const onScrub = (value: any) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setSongProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  return (
    <div className={styles.footer} style={{ background: theme.player }}>
      <div className={styles.songDetails}>
        <img className={styles.albumArt} src={imgSrc} alt='album-image' />
        <div className={styles.songInfo}>
          <h4>{songTitle}</h4>
          <p>{artist}</p>
        </div>
      </div>
      <div className={styles.playerControl}>
        <div className={styles.progress}>
          <input
            type='range'
            value={songProgress}
            step='1'
            min='0'
            max={duration ? duration : `${duration}`}
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
          />
        </div>
        <div className={styles.audioControl}>
          <SkipPreviousOutlinedIcon
            className={styles.player}
            onClick={toPrevTrack}
          />
          {isPlaying ? (
            <PauseCircleOutlinedIcon
              className={styles.player}
              onClick={playPauseTrack}
            />
          ) : (
            <PlayCircleOutlinedIcon
              className={styles.player}
              onClick={playPauseTrack}
            />
          )}

          <SkipNextOutlinedIcon
            className={styles.player}
            onClick={toNextTrack}
          />
        </div>
      </div>
      <div className={styles.volumeControl}>
        <QueueMusicOutlinedIcon />
        <VolumeUpOutlinedIcon />
        <Slider />
      </div>
    </div>
  );
};
