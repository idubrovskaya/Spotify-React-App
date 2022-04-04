import { ACTIONS } from "../constants";

interface IAlbumImage {
  height: number;
  url: string;
  width: number;
}

interface IArtist {
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ISong {
  image: string;
  songName: string;
  artist: string;
  preview_url: string;
  album: {
    images: IAlbumImage[];
  };
  artists: IArtist[];
}

export interface ISongsState {
  songs: ISong[];
  searchedSongsRequest: "";
}

const defaultState: ISongsState = {
  songs: [],
  searchedSongsRequest: "",
};

export const songReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.SEARCH_SONGS) {
    return {
      ...state,
      songs: action.searchedSongsRequest,
    };
  }
  if (action.type === ACTIONS.CLEAR_CONTENT) {
    return {
      ...state,
      songs: [],
    };
  }
  return state;
};
