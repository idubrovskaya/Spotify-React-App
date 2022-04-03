import { ACTIONS } from '../constants';
import { IGenresCard } from '../../components/Genres/GenresCard';
import { INewReleasesCard } from '../../components/New Releases/NewReleasesCard';

//

export interface ICategories {
  categories: IGenresCard[][];
}

const defaultStateCategories: ICategories = {
  categories: [],
};

export const categoriesReducer = (
  state = defaultStateCategories,
  action: any
) => {
  if (action.type === ACTIONS.GET_CATEGORIES) {
    return {
      ...state,
      categories: action.categories,
    };
  }
  if (action.type === ACTIONS.CLEAR_CONTENT) {
    return {
      ...state,
      categories: [],
    };
  }
  return state;
};

//

export interface IGenre {
  genre: IGenresCard[];
}

const defaultState: IGenre = {
  genre: [],
};

export const categoryReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.GET_PLAYLISTS) {
    return {
      ...state,
      genre: action.genre,
    };
  }
  if (action.type === ACTIONS.CLEAR_CONTENT) {
    return {
      ...state,
      genre: [],
    };
  }

  return state;
};

//new releases

export interface INewReleases {
  newReleases: INewReleasesCard[][];
}

const defaultStateNewReleases: INewReleases = {
  newReleases: [],
};

export const newReleasesReducer = (
  state = defaultStateNewReleases,
  action: any
) => {
  if (action.type === ACTIONS.GET_NEW_RELEASES) {
    return {
      ...state,
      newReleases: action.newReleases,
    };
  }
  if (action.type === ACTIONS.CLEAR_CONTENT) {
    return {
      ...state,
      newReleases: [],
    };
  }
  return state;
};

export interface INewAlbum {
  newReleasesTracks: INewReleasesCard[][];
}

const defaultStateNewTracks: INewAlbum = {
  newReleasesTracks: [],
};

export const newTracksReducer = (
  state = defaultStateNewTracks,
  action: any
) => {
  if (action.type === ACTIONS.GET_NEW_RELEASE_TRACKS) {
    return {
      ...state,
      newReleasesTracks: action.newReleasesTracks,
    };
  }
  if (action.type === ACTIONS.CLEAR_CONTENT) {
    return {
      ...state,
      newReleasesTracks: [],
    };
  }
  return state;
};

// featured playlists

export interface IFeaturedPlaylists {
  featuredPlaylists: INewReleasesCard[][];
}

const defaultStateFeaturedPlaylists: IFeaturedPlaylists = {
  featuredPlaylists: [],
};

export const featuredPlaylists = (
  state = defaultStateFeaturedPlaylists,
  action: any
) => {
  if (action.type === ACTIONS.GET_FEATURED_PLAYLISTS) {
    return {
      ...state,
      featuredPlaylists: action.featuredPlaylists,
    };
  }
  if (action.type === ACTIONS.CLEAR_CONTENT) {
    return {
      ...state,
      featuredPlaylists: [],
    };
  }
  return state;
};
