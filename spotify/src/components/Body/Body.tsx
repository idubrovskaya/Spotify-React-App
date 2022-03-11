import { SearchBar } from '../SearchBar/SearchBar';
import styles from './Body.module.css';
import { spotify } from '../../navigation/RootRouter';
import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchSongs } from '../../redux/actions/spotifyActions';
import { songReducers } from '../../redux/reducers/songReducers';
import { IState } from '../../redux/store';

export const Body = () => {
  const [search, setSearch] = useState('');
  const songs = useSelector((state: IState) => state.songReducers.songs);

  const handleEnter = (event: any) => {
    if (event.key === 'Enter') {
      dispatch(searchSongs(search, token));
    }
  };

  const handleSearchInputChanges = useCallback(
    (event: any) => {
      setSearch(event.target.value);
    },
    [setSearch]
  );

  const dispatch = useDispatch();
  const token = spotify.getAccessToken();
  console.log('token', token);

  return (
    <div className={styles.body}>
      <div className={styles.headerSearch}>
        <SearchBar
          value={search}
          onChange={handleSearchInputChanges}
          onKeyDown={handleEnter}
        />
      </div>
      <div className={styles.main}>
        {songs.length === 0 ? (
          <h1>NO SONGS</h1>
        ) : (
          songs.map((song) => {
            return (
              <>
                <p>{song.tracks.name}</p>
                <p>{song.tracks.artists[0].name}</p>
                <p>{song.tracks.album.name}</p>
              </>
            );
          })
        )}
      </div>
    </div>
  );
};
