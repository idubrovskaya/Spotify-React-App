import { SearchBar } from '../SearchBar/SearchBar';
import styles from './Body.module.css';
import { getTokenFromUrl, spotifyFetch } from '../../spotify';
import {
  useState,
  useCallback,
  useEffect,
  ChangeEvent,
  useContext,
} from 'react';
import { Context } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearContent,
  fetchSearchedSongs,
} from '../../redux/actions/spotifyActions';
import { IState } from '../../redux/store';
import { SearchResults, ISearchResults } from '../SearchResults/SearchResults';
import { Track } from '../Tracks/Track';
import { Loader } from '../Loader/Loader';

export const Search = () => {
  const token = localStorage.getItem('access_token');

  const { theme } = useContext(Context);

  const [search, setSearch] = useState('');
  const songs = useSelector((state: IState) => state.songReducer.songs); //для мэппинга альбома/песни/артиста

  const handleSearchInputChanges = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
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
    return () => {
      dispatch(clearContent());
    };
  }, [search, token]);

  console.log('songs', songs);

  return (
    <div className={styles.body} style={{ background: theme.backgroundMain }}>
      <div className={styles.headerSearch}>
        <SearchBar
          value={search}
          onChange={handleSearchInputChanges}
          onKeyDown={handleEnter}
        />
      </div>
      <div className={styles.main}>
        {songs.length === 0 ? (
          <h1>No songs</h1>
        ) : (
          songs?.map((song: any, i: number) => {
            return song.name ? (
              <Track
                index={i !== 0 ? i + 1 : 1}
                key={song.id + Math.random().toString(16).slice(2)}
                id={song.id}
                image={song.album.images[0].url}
                trackName={song.name}
                artist={song.artists[0].name}
                album={song.album.name}
                added={song?.album.release_date}
                preview={song.preview_url}
              />
            ) : (
              <Loader />
            );
          })
        )}
      </div>
    </div>
  );
};
