import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login } from '../components/Login/Login';
import { SideBar } from '../components/Sidebar/SideBar';
import { getTokenFromUrl } from '../spotify';

import SpotifyWebApi from 'spotify-web-api-js';
import { Body } from '../components/Body/Body';
import { Home } from '../components/Home/Home';
import { MyPlaylists } from '../components/MyPlaylists/MyPlaylists';
import { MusicPlayer } from '../components/MusicPlayer/MusicPlayer';

import '../App.css';

export const spotify = new SpotifyWebApi();

export const RootRouter = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const { access_token, expires_in, token_type } = getTokenFromUrl();

    localStorage.clear();
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('expires', expires_in);
    localStorage.setItem('token_type', token_type);

    if (access_token) {
      setToken(access_token);
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
            <Route path='/playlist' component={MyPlaylists} />
          </Switch>
          <MusicPlayer />
        </BrowserRouter>
      ) : (
        <Login />
      )}
    </div>
  );
};
