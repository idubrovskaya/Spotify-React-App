import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { spotifyReducers } from './reducers/spotifyReducers';
import { songReducers, ISongsState } from './reducers/songReducers';

export interface IState {
  songReducers: ISongsState;
}

export const store = createStore(
  combineReducers({ spotifyReducers, songReducers }),
  composeWithDevTools(applyMiddleware(thunk))
);
