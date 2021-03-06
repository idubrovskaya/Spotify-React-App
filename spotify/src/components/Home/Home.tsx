import styles from './Home.module.css';
import { useEffect } from 'react';
import { GenresCard } from '../Genres/GenresCard';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../redux/store';
import {
  clearContent,
  fetchCategories,
} from '../../redux/actions/spotifyActions';
import { Header } from '../Header/Header';
import { Loader } from '../Loader/Loader';
import { HomeTitle } from '../HomeTitle/HomeTitle';

export const Home = () => {
  const token = localStorage.getItem('access_token');

  const history = useHistory();

  const categories = useSelector(
    (state: IState) => state.categoriesReducer.categories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    return () => {
      dispatch(clearContent());
    };
  }, [token]);

  return (
    <div className={styles.main}>
      <Header />
      <HomeTitle />
      {categories.length !== 0 ? (
        <div className={styles.categories}>
          {categories?.map((category: any) => {
            return (
              <GenresCard
                key={category.id}
                id={category.id}
                image={category.icons[0].url}
                title={category.name}
                onClick={() => {
                  history.push('/category/' + category.id);
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
