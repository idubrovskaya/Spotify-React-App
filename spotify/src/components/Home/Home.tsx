import styles from './Home.module.css';
import { spotify } from '../../navigation/RootRouter';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    spotify.getCategories().then((cat) => {
      console.log('categories', cat);
    });
  }, []);

  return <div className={styles.main}></div>;
};
