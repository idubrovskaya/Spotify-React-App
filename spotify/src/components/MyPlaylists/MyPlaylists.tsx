import styles from './MyPlaylists.module.css';
import { useEffect, useState } from 'react';
import { spotifyFetch } from '../../spotify';

export const MyPlaylists = () => {
  const token = localStorage.getItem('access_token');

  const [savedTracks, setSavedTracks] = useState<any>([]);
  console.log('tracks', savedTracks);

  useEffect(() => {
    spotifyFetch('/me/tracks').then((res) => setSavedTracks([res]));
  }, [token]);

  //мой плейлист, доделать

  // useEffect(() => {
  //   spotifyFetch('/me/playlists').then((result) => setPlaylist([result]));
  // }, [token]);
  // const [playlist, setPlaylist] = useState<any>([]);
  // console.log('playlist', playlist);

  return (
    <div className={styles.myPlaylist}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <div className={styles.likeImg}>
            <img src='img/liked_songs.png' />
          </div>
          <div className={styles.info}>
            <p className={styles.playlistTitle}>PLAYLIST</p>
            <p className={styles.likedSongs}>Liked Songs</p>
          </div>
        </div>
      </div>
      <div className={styles.mainContent}>
        {savedTracks ? (
          <div className={styles.playlist}>
            {savedTracks[0]?.items?.map((track: any) => {
              return (
                <div className={styles.card}>
                  <div>
                    <img
                      src={track.track.album.images[0].url}
                      className={styles.image}
                    />
                    <p className={styles.artistName}>
                      {track.track.artists[0].name}
                    </p>
                    <p className={styles.trackName}>{track.track.name}</p>
                  </div>
                  <div>
                    <audio src={track.track.preview_url} controls />
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};
