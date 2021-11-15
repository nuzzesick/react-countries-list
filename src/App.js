import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { AppProvider } from './context';
import { Header } from './components';
import './app.css';
import AppRouting from './routing';

const App = () => (
  <Router>
    <SnackbarProvider>
      <AppProvider>
        <Header />
        <AppRouting />
      </AppProvider>
    </SnackbarProvider>
  </Router>
);

export default App;
