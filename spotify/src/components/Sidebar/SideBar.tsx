import styles from './SideBar.module.css';
import { NavLink } from 'react-router-dom';

export const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.menuNavigation}>
        <img src='img/spotify_logo_green.svg' />
        <ul>
          <li>
            <NavLink
              exact
              to='/'
              className={styles.link}
              activeClassName={styles.active}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/search'
              className={styles.link}
              activeClassName={styles.active}
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/playlist'
              className={styles.link}
              activeClassName={styles.active}
            >
              Playlist
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.albumArtwork}></div>
    </div>
  );
};
