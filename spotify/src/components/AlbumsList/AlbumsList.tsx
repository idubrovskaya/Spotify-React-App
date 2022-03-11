import { useEffect, useState } from 'react';
import { IAlbumCard } from '../AlbumCard/AlbumCard';

export const AlbumsList = () => {
  const [albums, setAlbums] = useState<IAlbumCard[]>([]);

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/artists/id/albums`)
      .then((response) => response.json())
      .then((result) => setAlbums([...albums, ...result.results]));
  }, []);
};
