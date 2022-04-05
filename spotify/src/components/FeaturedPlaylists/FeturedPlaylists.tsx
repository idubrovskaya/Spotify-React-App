import styles from './FeaturedPlaylists.module.css';

import { useContext, useEffect } from 'react';
import { Context } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  clearContent,
  fetchFeaturedPlaylists,
} from '../../redux/actions/spotifyActions';
import { IState } from '../../redux/store';
import { Header } from '../Header/Header';
import { HomeTitle } from '../HomeTitle/HomeTitle';
import { NewReleasesCard } from '../New Releases/NewReleasesCard';
import { Loader } from '../Loader/Loader';

export const FeaturedPlaylists = () => {
  const token = localStorage.getItem('access_token');

  const { theme } = useContext(Context);

  const history = useHistory();

  const featuredPlaylists = useSelector(
    (state: IState) => state.featuredPlaylists.featuredPlaylists
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeaturedPlaylists());
    return () => {
      dispatch(clearContent());
    };
  }, [token]);

  console.log('feat', featuredPlaylists);

  return (
    <div className={styles.main} style={{ background: theme.backgroundMain }}>
      <Header />
      <HomeTitle />

      {featuredPlaylists.length !== 0 ? (
        <div className={styles.playlists}>
          {featuredPlaylists?.map((featuredPlaylist: any) => {
            return (
              <NewReleasesCard
                key={featuredPlaylist.id}
                id={featuredPlaylist.id}
                image={featuredPlaylist.images[0].url}
                // title={featuredPlaylist.name}
                onClick={() => {
                  history.push('/playlist/' + featuredPlaylist.id);
                }}
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
