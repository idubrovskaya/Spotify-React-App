import { ACTIONS } from '../constants';
import { ISong } from './spotifyReducers';

export interface ITracks {
  track: ISong[];
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
