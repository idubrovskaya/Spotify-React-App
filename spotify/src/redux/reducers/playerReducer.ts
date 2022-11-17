import { ACTIONS } from '../constants';
import { ISong } from './spotifyReducers';

export interface IPlayerState {
  playlist: ISong[];
  song: ISong | null;
  songIndex: number;
}

const defaultState: IPlayerState = {
  playlist: [],
  song: null,
  songIndex: 0,
};

export const playerReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.PLAY_SONG) {
    return {
      ...state,
      song: action.song,
      playlist: action.playlist,
      songIndex: action.songIndex,
    };
  }

  if (action.type === ACTIONS.PLAY_PREV_SONG) {
    const prevIndex = state.songIndex - 1;

    if (prevIndex <= 0) {
      return {
        ...state,
        song: state.playlist[state.playlist.length - 1],
        songIndex: state.playlist.length - 1,
      };
    }

    return { ...state, song: state.playlist[prevIndex], songIndex: prevIndex };
  }

  if (action.type === ACTIONS.PLAY_NEXT_SONG) {
    const nextIndex = state.songIndex + 1;

    if (nextIndex >= state.playlist.length) {
      return {
        ...state,
        song: state.playlist[0],
        songIndex: 0,
      };
    }

    return { ...state, song: state.playlist[nextIndex], songIndex: nextIndex };
  }

  return state;
};

export interface ISound {
  volume: number;
}

const defaultSound: ISound = {
  volume: 50,
};

export const soundReducer = (state = defaultSound, action: any) => {
  if (action.type === ACTIONS.UPDATE_VOLUME) {
    return {
      volume: action.volume,
    };
  }
  return state;
};
