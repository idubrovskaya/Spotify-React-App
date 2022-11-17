import styles from './SideBar.module.css';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../App';
import { SwitchThemeToggle } from '../SwitchThemeToggle/SwitchThemeToggle';
import { HomeOutlined } from '@mui/icons-material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const SideBar = () => {
  const { theme, isDark, changeIsDark } = useContext(Context);

  return (
    <div
      className={styles.sidebar}
      style={{ background: theme.backgroundSidebar }}
    >
      <div className={styles.menuNavigation}>
        <img src='img/spotify_logo_green.svg' style={{ filter: theme.logo }} />
        <ul>
          <li>
            <div className={styles.block}>
              <img
                src='img/home.svg'
                className={styles.image}
                style={{ filter: theme.buttons }}
              />
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
            </div>
          </li>
          <li>
            <div className={styles.block}>
              <img
                src='img/search.svg'
                className={styles.image}
                style={{ filter: theme.buttons }}
              />
              <NavLink
                to='/search'
                className={styles.link}
                style={{ color: theme.sidebarNavigation }}
                activeStyle={{ color: theme.sidebarNavigationActive }}
                activeClassName={styles.active}
              >
                Search
              </NavLink>
            </div>
          </li>
          <li>
            <div className={styles.block}>
              <img src='img/liked_songs.png' className={styles.image} />
              <NavLink
                to='/liked_songs'
                className={styles.link}
                style={{ color: theme.sidebarNavigation }}
                activeStyle={{ color: theme.sidebarNavigationActive }}
                activeClassName={styles.active}
              >
                Liked songs
              </NavLink>
            </div>
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
