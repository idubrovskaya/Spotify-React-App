const defaultState: ISongsState = {
  songs: [],
};

export interface ISongsState {
  songs: [];
}

export const songReducers = (state = defaultState, action: any) => {
  switch (action.type) {
    case 'FETCH_SONGS_SUCCESS':
      return {
        ...state,
        songs: action.songs,
        fetchSongsError: false,
      };

    case 'FETCH_SONGS_ERROR':
      return {
        ...state,
        fetchSongsError: true,
      };

    case 'SEARCH_SONGS_SUCCESS':
      return {
        ...state,
        songs: action.songs,
        searchSongsError: false,
      };

    case 'SEARCH_SONGS_ERROR':
      return {
        ...state,
        searchSongsError: true,
      };

    default:
      return state;
  }
};
