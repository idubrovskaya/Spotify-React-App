import { SearchBar } from "../SearchBar/SearchBar";
import styles from "./Body.module.css";
import { getTokenFromUrl, spotifyFetch } from "../../spotify";
import { useState, useCallback, useEffect, ChangeEvent } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  clearContent,
  fetchSearchedSongs,
} from "../../redux/actions/spotifyActions";
import { IState } from "../../redux/store";
import { SearchResults, ISearchResults } from "../SearchResults/SearchResults";
import { Track } from "../Tracks/Track";
import { playSong } from "../../redux/actions/playerActions";
import { ISong } from "../../redux/reducers/spotifyReducers";

export const Search = () => {
  const token = localStorage.getItem("access_token");

  const [search, setSearch] = useState("");
  const songs = useSelector((state: IState) => state.songReducer.songs); //для мэппинга альбома/песни/артиста

  const handleSearchInputChanges = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    [setSearch]
  );

  const dispatch = useDispatch();

  const handleEnter = (event: any) => {
    if (event.key === "Enter") {
      dispatch(fetchSearchedSongs(search));
    }
  };

  useEffect(() => {
    dispatch(fetchSearchedSongs(search));
    return () => {
      dispatch(clearContent());
    };
  }, [search, token]);

  const onClickSong = (song: ISong, index: number) => {
    dispatch(playSong(song, songs, index));
  };

  return (
    <div className={styles.body}>
      <div className={styles.headerSearch}>
        <SearchBar
          value={search}
          onChange={handleSearchInputChanges}
          onKeyDown={handleEnter}
        />
      </div>
      <div className={styles.main}>
        {songs.length === 0 ? (
          <h1>No songs</h1>
        ) : (
          songs?.map((song: any, i: number) => {
            return song.name || songs.length !== 0 ? (
              <Track
                index={i !== 0 ? i + 1 : 1}
                key={song.id + Math.random().toString(16).slice(2)}
                id={song.id}
                image={song.album.images[0].url}
                trackName={song.name}
                artist={song.artists[0].name}
                album={song.album.name}
                added={song?.album.release_date}
                preview={song.preview_url}
                onClick={() => onClickSong(song, i)}
              />
            ) : (
              <h1>NOTHING</h1>
            );
          })
        )}
      </div>
    </div>
  );
};
