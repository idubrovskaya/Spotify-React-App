import styles from './Home.module.css';
import { spotify } from '../../navigation/RootRouter';
import { useEffect, useState } from 'react';
import { GenresCard, IGenresCard } from '../Genres/GenresCard';
import { getTokenFromUrl, spotifyFetch } from '../../spotify';
import axios from 'axios';

export const Home = () => {
  const token = localStorage.getItem('access_token');

  const [categories, setCategories] = useState<IGenresCard[][]>([]);
  console.log('categ', categories);

  useEffect(() => {
    spotifyFetch('/browse/categories').then((result) =>
      setCategories([...categories, result.categories.items])
    );
  }, [token]);

  return categories[0] ? (
    <div className={styles.main}>
      {categories[0]?.map((cat: any) => {
        return (
          <div className={styles.categories}>
            <GenresCard
              key={cat.id}
              image={cat.icons[0].url}
              title={cat.name}
            />
          </div>
        );
      })}
    </div>
  ) : null;
};
