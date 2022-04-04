import { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearContent, fetchTracks } from '../../redux/actions/spotifyActions';
import { IState } from '../../redux/store';
import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';
import { Track } from '../Tracks/Track';
import styles from './Playlist.module.css';
import { Context } from '../../App';

export const PlaylistTracks = () => {
  const token = localStorage.getItem('access_token');

  const { theme } = useContext(Context);

  const params: { playlist_id: string } = useParams();

  const dispatch = useDispatch();

  const tracks = useSelector((state: IState) => state.tracksReducer.track);

  useEffect(() => {
    dispatch(fetchTracks(params.playlist_id));
    return () => {
      dispatch(clearContent());
    };
  }, [token]);

  console.log('треки', tracks);

  return (
    <div
      className={styles.wrapper}
      style={{ background: theme.backgroundMain }}
    >
      <Header />
      {tracks.length === 0 ? (
        <Loader />
      ) : (
        <div className={styles.tracks}>
          {tracks.map((track: any, i: number) => {
            return (
              <Track
                key={track.id}
                id={track.id}
                index={i !== 0 ? i + 1 : 1}
                image={track.track?.album?.images[0]?.url}
                trackName={track.track?.name}
                artist={track.track?.artists[0]?.name}
                album={track.track?.album.name}
                added={track?.added_at}
                preview={track.track?.preview_url}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
