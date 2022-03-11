import React, { useEffect, useState } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from '../components/Login/Login';
import { SideBar } from '../components/Sidebar/SideBar';
import { getTokenFromUrl } from '../spotify';

import SpotifyWebApi from 'spotify-web-api-js';
import { MusicPlayer } from '../components/MusicPlayer/MusicPlayer';
import { Body } from '../components/Body/Body';
import { Home } from '../components/Home/Home';
import '../App.css';

export const spotify = new SpotifyWebApi();

export const RootRouter = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _accessToken = hash.access_token;
    localStorage.clear();
    localStorage.setItem('accestoken', _accessToken);

    if (_accessToken) {
      setToken(_accessToken);
      spotify.setAccessToken(_accessToken);
    }
  }, []);

  return (
    <div className='spotify'>
      {token ? (
        <BrowserRouter>
          <SideBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/search' component={Body} />
          </Switch>
          <MusicPlayer />
        </BrowserRouter>
      ) : (
        <Login />
      )}
    </div>
  );
};
