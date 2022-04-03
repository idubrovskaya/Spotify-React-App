import { ACTIONS } from '../constants';

export interface IAllTracks {
  image: string;
  trackName: string;
  artistName: string;
  albumName: string;
  previewUrl: string;
}

export interface ITracks {
  track: IAllTracks[];
}

const defaultState: ITracks = {
  track: [],
};

export const tracksReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.GET_TRACKS) {
    return {
      ...state,
      track: action.track,
    };
  }
  if (action.type === ACTIONS.CLEAR_CONTENT) {
    return {
      ...state,
      track: [],
    };
  }

  return state;
};
