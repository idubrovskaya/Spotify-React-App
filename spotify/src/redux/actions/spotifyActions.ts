import { ACTIONS } from '../constants';
import { Dispatch } from 'redux';
import { spotifyFetch } from '../../spotify';
import { ISong } from '../reducers/spotifyReducers';
import {
  ICategories,
  IFeaturedPlaylists,
  IGenre,
  INewAlbum,
} from '../reducers/categoryReducer';
import { ITracks } from '../reducers/tracksReducer';
import { INewReleases } from '../reducers/categoryReducer';

// поиск треков

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
    console.log('search tracks', response.tracks.items);
  };
}

// категории

export const getCategories = (categories: ICategories) => {
  return {
    type: ACTIONS.GET_CATEGORIES,
    categories: categories,
  };
};

export function fetchCategories() {
  return async (dispatch: Dispatch) => {
    const response = await spotifyFetch(`/browse/categories`);

    dispatch(getCategories(response.categories.items));
  };
}

// new releases

export const getNewReleases = (newReleases: INewReleases) => {
  return {
    type: ACTIONS.GET_NEW_RELEASES,
    newReleases: newReleases,
  };
};

export function fetchNewReleases() {
  return async (dispatch: Dispatch) => {
    const response = await spotifyFetch(`/browse/new-releases`);

    dispatch(getNewReleases(response.albums.items));
  };
}

export const getNewReleaseTracks = (newReleasesTracks: INewAlbum) => {
  return {
    type: ACTIONS.GET_NEW_RELEASE_TRACKS,
    newReleasesTracks: newReleasesTracks,
  };
};

export function fetchNewReleaseTracks(album_id: string) {
  return async (dispatch: Dispatch) => {
    const response = await spotifyFetch(`albums/${album_id}`);
    dispatch(getNewReleaseTracks(response.tracks.items));
    console.log('tttt', response);
  };
}

// featured playlists

export const getFeaturedPlaylists = (featuredPlaylists: IFeaturedPlaylists) => {
  return {
    type: ACTIONS.GET_FEATURED_PLAYLISTS,
    featuredPlaylists: featuredPlaylists,
  };
};

export function fetchFeaturedPlaylists() {
  return async (dispatch: Dispatch) => {
    const response = await spotifyFetch(`browse/featured-playlists`);

    dispatch(getFeaturedPlaylists(response.playlists.items));
    console.log(response);
  };
}

// плейлисты категории

const getCategoryPlaylists = (genre: IGenre) => {
  return {
    type: ACTIONS.GET_PLAYLISTS,
    genre: genre,
  };
};

export function fetchPlaylists(category_id: string) {
  return async (dispatch: Dispatch) => {
    const response = await spotifyFetch(
      `/browse/categories/${category_id}/playlists`
    );
    dispatch(getCategoryPlaylists(response.playlists.items));
  };
}

// треки плейлиста

export const getTracks = (track: ITracks) => {
  return {
    type: ACTIONS.GET_TRACKS,
    track: track,
  };
};

export function fetchTracks(playlist_id: string) {
  return async (dispatch: Dispatch) => {
    const response = await spotifyFetch(`/playlists/${playlist_id}`);
    dispatch(getTracks(response.tracks.items));
    console.log('trscks', response);
  };
}

//очищаем контент

export const clearContent = () => {
  return {
    type: ACTIONS.CLEAR_CONTENT,
  };
};
