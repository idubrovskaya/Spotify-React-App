import { ACTIONS } from "../constants";
import { ISong } from "../reducers/spotifyReducers";

export const playSong = (song: ISong, playlist: ISong[], songIndex: number) => {
  return {
    type: ACTIONS.PLAY_SONG,
    song,
    playlist,
    songIndex,
  };
};

export const playPrevSong = () => {
  return {
    type: ACTIONS.PLAY_PREV_SONG,
  };
};

export const playNextSong = () => {
  return {
    type: ACTIONS.PLAY_NEXT_SONG,
  };
};
