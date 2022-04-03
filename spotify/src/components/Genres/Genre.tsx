import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
  clearContent,
  fetchPlaylists,
} from '../../redux/actions/spotifyActions';
import { IState } from '../../redux/store';
import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';
import { Playlist } from '../Playlist/Playlist';
import styles from './Genres.module.css';

export const Genre = () => {
  const token = localStorage.getItem('access_token');

  const params: { category_id: string } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const genre = useSelector((state: IState) => state.categoryReducer.genre);

  useEffect(() => {
    dispatch(fetchPlaylists(params.category_id));
    return () => {
      dispatch(clearContent());
    };
  }, [token]);

  console.log('genre', genre);

  return (
    <div className={styles.categoryPlaylists}>
      <Header />
      <div className={styles.playlists}>
        {genre.length === 0 ? (
          <Loader />
        ) : (
          genre.map((playlist: any) => {
            return (
              <Playlist
                key={playlist.id}
                id={playlist.id}
                image={playlist.images[0].url}
                playlistName={playlist.name}
                description={playlist.description}
                onClick={() => {
                  history.push('/playlist/' + playlist.id);
                }}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
