import { SearchBar } from '../SearchBar/SearchBar';
import styles from './Body.module.css';
import { getTokenFromUrl, spotifyFetch } from '../../spotify';
import { useState, useCallback, useEffect } from 'react';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchedSongs } from '../../redux/actions/spotifyActions';
import { IState } from '../../redux/store';

export const Body = () => {
  const token = localStorage.getItem('access_token');

  const [search, setSearch] = useState('');
  const songs = useSelector((state: IState) => state.songReducer.songs); //для мэппинга альбома/песни/артиста

  const handleSearchInputChanges = useCallback(
    (event: any) => {
      setSearch(event.target.value);
    },
    [setSearch]
  );

  const dispatch = useDispatch();

  const handleEnter = (event: any) => {
    if (event.key === 'Enter') {
      dispatch(fetchSearchedSongs(search));
    }
  };

  useEffect(() => {
    dispatch(fetchSearchedSongs(search));
  }, [search, token]);

  return (
    <div className={styles.body}>
      <div className={styles.headerSearch}>
        <SearchBar
          value={search}
          onChange={handleSearchInputChanges}
          onKeyDown={handleEnter}
        />
      </div>
      <div className={styles.main}></div>
    </div>
  );
};
