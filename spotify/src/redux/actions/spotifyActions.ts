import { ACTIONS } from '../constants';
import { Dispatch } from 'redux';
import { spotifyFetch } from '../../spotify';
import { ISong } from '../reducers/spotifyReducers';

export const searchSongs = (songs: ISong[]) => {
  return {
    type: ACTIONS.SEARCH_SONGS,
    searchedSongsRequest: songs,
  };
};

export function fetchSearchedSongs(search: string) {
  return async (dispatch: Dispatch) => {
    const response = await spotifyFetch(
      `/search?query=${search}&type=track,artist&offset=35&limit=50`
    );

    dispatch(searchSongs(response.tracks.items));
  };
}
