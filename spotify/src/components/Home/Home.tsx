import styles from './Home.module.css';
import { useContext, useEffect } from 'react';
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
import { Context } from '../../App';

export const Home = () => {
  const { theme } = useContext(Context);
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

  console.log(categories);

  return (
    <div className={styles.main} style={{ background: theme.backgroundMain }}>
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
