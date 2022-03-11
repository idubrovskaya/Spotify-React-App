import { ACTIONS } from '../constants';
import { Dispatch } from 'redux';

export const setAccessToken = (_token: any) => {
  return {
    type: ACTIONS.SET_ACCESS_TOKEN,
    payload: _token,
  };
};

//
//
//
//
//
export const fetchSongsSuccess = (songs: any) => {
  return {
    type: ACTIONS.SEARCH_SONGS_SUCCESS,
    songs,
  };
};

export const fetchSongsError = () => {
  return {
    type: ACTIONS.SEARCH_SONGS_ERROR,
  };
};

export const searchSongs = (searchTerm: string, accessToken: any) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`,
        {
          headers: {
            Authorization: 'Bearer ' + accessToken,
            Accept: 'application/json',
          },
        }
      );
      const result = await response.json();

      if (result.statusText === 'Unauthorized') {
        throw result;
        // window.location.href = './';
      }
      if (result.statusText !== 'Unauthorized') {
        result.items = result.tracks.items.map((item: any) => {
          return {
            track: item,
          };
        });
        dispatch(fetchSongsSuccess(result.items));
      }
    } catch (err) {
      dispatch(fetchSongsError());
    }
  };
};
