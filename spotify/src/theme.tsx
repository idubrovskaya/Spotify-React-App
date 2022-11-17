import { hover } from '@testing-library/user-event/dist/hover';

export const darkTheme = {
  backgroundSidebar: '#040404',
  backgroundMain: '#121212',
  sidebarNavigation: '#b3b3b3',
  sidebarNavigationActive: '#fff',
  buttons: 'brightness(0) invert(1)',
  logo: 'none',
  userInfo: '#fff',
  newReleasesTextCard: '#fff',
  player: '#040404',
  playlistCard: 'rgba(24, 24, 24)',
  playlistDescription: '#9a9797',
  trackArtist: '#9a9797',
  trackAlbum: '#9a9797',
  likedSongsBackground:
    'linear-gradient(rgba(73, 35, 191, 1), rgba(0, 0, 0, 1))',
  likedSongsTitle: 'rgba(73, 35, 191, 0.5)',
};

export const lightTheme = {
  backgroundSidebar: '#f573a1',
  backgroundMain: '#fae62d',
  sidebarNavigation: '#fae62d',
  sidebarNavigationActive: '#fff',
  buttons: 'none ',
  logo: 'brightness(0) invert(1)',
  userInfo: '#040404',
  newReleasesTextCard: '#040404',
  player: '#f5256e',
  playlistCard: '#f5256e',
  playlistDescription: '#fae62d',
  trackArtist: '#f5256e',
  trackAlbum: '#f5256e',
  likedSongsBackground: 'linear-gradient(#16FFBD, #FEF9C7)',
  likedSongsTitle: '#12c998',
};
