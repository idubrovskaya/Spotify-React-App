import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
  clearContent,
  fetchNewReleaseTracks,
} from '../../redux/actions/spotifyActions';
import { IState } from '../../redux/store';
import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';
import { Track } from '../Tracks/Track';
import { Context } from '../../App';
import { useContext } from 'react';
import { playSong } from '../../redux/actions/playerActions';
import { ISong } from '../../redux/reducers/spotifyReducers';

import styles from './NewReleases.module.css';

export const NewReleasesTracks = () => {
  const token = localStorage.getItem('access_token');

  const { theme } = useContext(Context);

  const params: { album_id: string } = useParams();

  const dispatch = useDispatch();

  const newTracks = useSelector(
    (state: IState) => state.newTracksReducer.newReleasesTracks
  );

  useEffect(() => {
    dispatch(fetchNewReleaseTracks(params.album_id));

    return () => {
      dispatch(clearContent());
    };
  }, [token]);

  const onClickSong = (track: ISong, index: number) => {
    dispatch(playSong(track, newTracks, index));
  };

  return (
    <div className={styles.main} style={{ background: theme.backgroundMain }}>
      <Header />
      {newTracks.length !== 0 ? (
        <div className={styles.tracks}>
          {newTracks.map((track: any, i: number) => {
            return (
              <Track
                index={i !== 0 ? i + 1 : 1}
                key={track.id + Math.random().toString(16).slice(2)}
                id={track.id}
                // image={track?.images[0]?.url}
                trackName={track.name}
                artist={track.artists[0].name}
                preview={track.preview_url}
                onClick={() => onClickSong(track, i)}
              />
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};
