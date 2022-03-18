import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ISongsState, songReducer } from './reducers/spotifyReducers';

export interface IState {
  songReducer: ISongsState;
}

export const store = createStore(
  combineReducers({ songReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
