import styles from './SideBar.module.css';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../App';
import { SwitchThemeToggle } from '../SwitchThemeToggle/SwitchThemeToggle';

export const SideBar = () => {
  const { theme, isDark, changeIsDark } = useContext(Context);

  return (
    <div
      className={styles.sidebar}
      style={{ background: theme.backgroundSidebar }}
    >
      <div className={styles.menuNavigation}>
        <img src='img/spotify_logo_green.svg' />
        <ul>
          <li>
            <NavLink
              exact
              to='/'
              className={styles.link}
              style={{ color: theme.sidebarNavigation }}
              activeStyle={{ color: theme.sidebarNavigationActive }}
              activeClassName={styles.active}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/search'
              className={styles.link}
              style={{ color: theme.sidebarNavigation }}
              activeStyle={{ color: theme.sidebarNavigationActive }}
              activeClassName={styles.active}
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/liked_songs'
              className={styles.link}
              style={{ color: theme.sidebarNavigation }}
              activeStyle={{ color: theme.sidebarNavigationActive }}
              activeClassName={styles.active}
            >
              Playlist
            </NavLink>
          </li>
        </ul>
      </div>
      <SwitchThemeToggle
        inputChecked={isDark ? true : false}
        onClick={changeIsDark}
      />{' '}
      <div className={styles.albumArtwork}></div>
    </div>
  );
};
