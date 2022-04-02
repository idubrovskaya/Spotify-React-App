import { useEffect, useRef, useState } from "react";

import styles from "./MusicPlayer.module.css";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import PauseCircleOutlinedIcon from "@mui/icons-material/PauseCircleOutlined";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import QueueMusicOutlinedIcon from "@mui/icons-material/QueueMusicOutlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import { Slider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { IState } from "../../redux/store";
import { playNextSong, playPrevSong } from "../../redux/actions/playerActions";

export const MusicPlayer = ({ imgSrc, songTitle }: any) => {
  const song = useSelector((state: IState) => state.playerReducer.song);
  const songSrc = song?.preview_url;
  const artist = song?.artists[0].name;
  const dispatch = useDispatch();

  const localToken = localStorage.getItem("access_token");

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

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setSongProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(songSrc);
    setSongProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      // startTimer();
    } else {
      isReady.current = true;
    }
  }, [songSrc]);

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
    console.log("TODO play pause");
  };
  // как передать песни из списка ?
  const toPrevTrack = () => {
    dispatch(playPrevSong());
    console.log("TODO go to prev");
  };

  const toNextTrack = () => {
    dispatch(playNextSong());
    console.log("TODO go to next");
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

  return song ? (
    <div className={styles.footer}>
      <div className={styles.songDetails}>
        <img
          className={styles.albumArt}
          src={song?.album?.images[0].url}
          alt="album"
        />
        <div className={styles.songInfo}>
          <h4>{songTitle}</h4>
          <p>{artist}</p>
        </div>
      </div>
      <div className={styles.playerControl}>
        <div className={styles.progress}>
          <input
            type="range"
            value={songProgress}
            step="1"
            min="0"
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
  ) : null;
};
