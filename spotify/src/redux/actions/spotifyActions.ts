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
      `/search?query=${search}&type=artist,album,track&offset=5&limit=10`
    );
    const result = await response.json();
    // console.log(result);

    dispatch(searchSongs(result.body.tracks.items));
  };
}
