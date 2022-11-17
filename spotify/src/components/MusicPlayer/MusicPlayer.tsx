import { useEffect, useRef, useState, useContext } from 'react';
import { Context } from '../../App';

import styles from './MusicPlayer.module.css';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import PauseCircleOutlinedIcon from '@mui/icons-material/PauseCircleOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../redux/store';
import {
  playNextSong,
  playPrevSong,
  playSong,
  updateVolume,
} from '../../redux/actions/playerActions';

export const MusicPlayer = ({ songTitle }: any) => {
  const song = useSelector((state: IState) => state.playerReducer.song);
  const songSrc = song?.preview_url;
  // const artist = song?.artists[0].name;
  const dispatch = useDispatch();

  const { theme } = useContext(Context);

  // State
  const [songProgress, setSongProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [volume, setVolume] = useState(50);

  // Refs
  const audioRef = useRef(new Audio(songSrc));
  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout);
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      //очищаем, когда трек прекратил играть
      audioRef.current.pause();
      clearInterval(intervalRef.current as NodeJS.Timeout);
    };
  }, []);

  const startTimer = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setSongProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(songSrc);
    setSongProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      isReady.current = true;
    }
  }, [songSrc]);

  const playPauseTrack = () => {
    audioRef.current.pause();
    setIsPlaying(!isPlaying);
    console.log('TODO play pause');
  };
  const toPrevTrack = () => {
    dispatch(playPrevSong());
    console.log('TODO go to prev');
  };

  const toNextTrack = () => {
    dispatch(playNextSong());
    console.log('TODO go to next');
  };

  const onScrub = (value: any) => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    audioRef.current.currentTime = value;
    setSongProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const currentPercentage = duration
    ? `${(songProgress / duration) * 100}%`
    : '0%';

  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #1db954))
`;

  const updateVol = (e: any) => {
    // setVolume(e.target.value);
    dispatch(updateVolume(e.target.value));
  };

  return song ? (
    <div className={styles.footer} style={{ background: theme.player }}>
      <div className={styles.songDetails}>
        <img
          className={styles.albumArt}
          src={song?.album?.images[0].url}
          alt='album'
        />
        <div className={styles.songInfo}>
          <h4>{songTitle}</h4>
          {/* <p>{artist}</p> */}
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
            style={{ background: trackStyling }}
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
        {/* <QueueMusicOutlinedIcon />
        <VolumeUpOutlinedIcon />
        <input
          type='range'
          value={}
          min={0}
          max={100}
          onChange={(e) => updateVol(e.target.value)}
        /> */}
      </div>
    </div>
  ) : null;
};
