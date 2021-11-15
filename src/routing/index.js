import React, { useContext } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { AppContext } from '../context';
import { AppContent } from './App.styles';
import { ternaryThemeBackground, themeTransition } from '../assets/commons';
import { Country, Home } from '../views';

const AppRouting = () => {
  const context = useContext(AppContext);
  const { data: { isDarkThemeActive } } = context;

  const GlobalStyle = createGlobalStyle`
  body {
    background: ${ternaryThemeBackground};
    transition: ${themeTransition};
  }
`;

  return (
    <AppContent isDarkThemeActive={isDarkThemeActive}>
      <GlobalStyle isDarkThemeActive={isDarkThemeActive} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/country/:code">
          <Country />
        </Route>
      </Switch>
    </AppContent>
  );
};

export default AppRouting;
