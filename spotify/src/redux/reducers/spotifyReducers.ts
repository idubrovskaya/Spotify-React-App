import { ACTIONS } from '../constants';

export interface ISong {
  image: string;
  songName: string;
  artist: string;
}

export interface ISongsState {
  songs: ISong[];
  searchedSongsRequest: '';
}

const defaultState: ISongsState = {
  songs: [],
  searchedSongsRequest: '',
};

export const songReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.SEARCH_SONGS) {
    return {
      ...state,
      songs: action.searchedSongsRequest,
    };
  }
  return state;
};
