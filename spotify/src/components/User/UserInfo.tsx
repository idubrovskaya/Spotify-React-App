import { useEffect, useState } from 'react';
import { spotifyFetch } from '../../spotify';
import { IUser, User } from '../User/User';

export const UserInfo = () => {
  const [user, setUser] = useState<any>([]);

  useEffect(() => {
    spotifyFetch('/me').then((result) => setUser([result]));
  }, []);

  return user[0]?.images ? (
    <>
      <User
        image={user[0]?.images[0].url}
        displayName={user[0]?.display_name}
      />
    </>
  ) : null;
};
