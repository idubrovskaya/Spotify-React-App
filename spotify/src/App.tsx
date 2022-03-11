import React, { createContext } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { RootRouter } from './navigation/RootRouter';
import { store } from './redux/store';

export const Context = createContext({});

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <RootRouter />
      </div>
    </Provider>
  );
}

export default App;
