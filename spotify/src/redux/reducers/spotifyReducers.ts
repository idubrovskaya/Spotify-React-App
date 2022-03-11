import { ACTIONS } from '../constants';

export const initialState = {
  user: null,
  token: null,
  playlists: [],
  playing: false,
  item: null,
};

export const spotifyReducers = (state = initialState, action: any) => {
  if (action.type === ACTIONS.SET_ACCESS_TOKEN) {
    return {
      ...state,
      token: action.token,
    };
  }

  if (action.type === ACTIONS.SET_USER) {
    return {
      ...state,
      user: action.user,
    };
  }
  return state;
};
