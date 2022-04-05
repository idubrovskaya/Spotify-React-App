import styles from '../Home/Home.module.css';
import { useEffect, useContext } from 'react';
import { Context } from '../../App';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../redux/store';
import {
  clearContent,
  fetchNewReleases,
} from '../../redux/actions/spotifyActions';
import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';
import { NewReleasesCard } from './NewReleasesCard';
import { HomeTitle } from '../HomeTitle/HomeTitle';

export const NewReleases = () => {
  const token = localStorage.getItem('access_token');

  const { theme } = useContext(Context);

  const history = useHistory();

  const newReleases = useSelector(
    (state: IState) => state.newReleasesReducer.newReleases
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewReleases());
    return () => {
      dispatch(clearContent());
    };
  }, [token]);

  console.log('new', newReleases);

  return (
    <div className={styles.main} style={{ background: theme.backgroundMain }}>
      <Header />
      <HomeTitle />
      {newReleases.length !== 0 ? (
        <div className={styles.categories}>
          {newReleases?.map((newRelease: any) => {
            return (
              <NewReleasesCard
                key={newRelease.id}
                id={newRelease.id}
                image={newRelease.images[0].url}
                title={newRelease.name}
                onClick={() => {
                  history.push('/album/' + newRelease.id);
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
