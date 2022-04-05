import React, { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { RootRouter } from './navigation/RootRouter';
import { store } from './redux/store';
import { darkTheme, lightTheme } from './theme';

export const Context = createContext({
  isDark: false,
  changeIsDark: () => {},
  theme: darkTheme,
});

function App() {
  const [isDark, setIsDark] = useState(true);

  const changeIsDark = () => {
    setIsDark((isDark) => !isDark);
  };
  return (
    <Provider store={store}>
      <Context.Provider
        value={{ isDark, changeIsDark, theme: isDark ? darkTheme : lightTheme }}
      >
        <div className='App'>
          <RootRouter />
        </div>
      </Context.Provider>
    </Provider>
  );
}

export default App;
