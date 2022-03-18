import styles from './Home.module.css';
import { spotify } from '../../navigation/RootRouter';
import { useEffect, useState } from 'react';
import { GenresCard, IGenresCard } from '../Genres/GenresCard';
import { getTokenFromUrl, spotifyFetch } from '../../spotify';
import axios from 'axios';

export const Home = () => {
  const token = localStorage.getItem('access_token');
  console.log(getTokenFromUrl());

  const [categories, setCategories] = useState<IGenresCard[][]>([]);
  console.log(categories);

  useEffect(() => {
    spotifyFetch('/browse/categories').then((result) =>
      setCategories([...categories, result.categories.items])
    );
  }, []);

  return (
    <div className={styles.main}>
      {categories[0].map((cat: any) => {
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
  );
};
