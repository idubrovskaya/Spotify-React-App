import { NavLink } from 'react-router-dom';
import styles from './HomeTitle.module.css';

export const HomeTitle = () => {
  return (
    <div className={styles.title}>
      <div className={styles.inactive}>
        <NavLink exact to='/' activeStyle={{ color: 'green' }}>
          Categories
        </NavLink>
        <NavLink to='/featured_playlists' activeStyle={{ color: 'green' }}>
          Featured Playlists
        </NavLink>
        <NavLink to='/new_releases' activeStyle={{ color: 'green' }}>
          New Releases
        </NavLink>
      </div>
    </div>
  );
};
