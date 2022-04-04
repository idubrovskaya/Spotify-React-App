import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ISongsState, songReducer } from './reducers/spotifyReducers';
import {
  categoryReducer,
  ICategories,
  categoriesReducer,
  IGenre,
  INewReleases,
  newReleasesReducer,
  newTracksReducer,
  INewAlbum,
  IFeaturedPlaylists,
  featuredPlaylists,
} from './reducers/categoryReducer';
import { tracksReducer, ITracks } from './reducers/tracksReducer';
import { IPlayerState, playerReducer } from './reducers/playerReducer';

export interface IState {
  songReducer: ISongsState;
  categoryReducer: IGenre;
  tracksReducer: ITracks;
  categoriesReducer: ICategories;
  newReleasesReducer: INewReleases;
  newTracksReducer: INewAlbum;
  featuredPlaylists: IFeaturedPlaylists;
  playerReducer: IPlayerState;
}

export const store = createStore(
  combineReducers({
    songReducer,
    categoryReducer,
    tracksReducer,
    categoriesReducer,
    newReleasesReducer,
    newTracksReducer,
    featuredPlaylists,
    playerReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
