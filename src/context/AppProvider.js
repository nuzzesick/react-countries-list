import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { getAllCountries } from '../services';
import useLocalStorage from '../hooks/useLocalStorage';
import AppContext from './AppContext';
import { RefreshButton } from '../components';

const AppProvider = ({ children }) => {
  const [isDarkThemeActive, setIsDarkThemeActive] = useLocalStorage('dark-theme', false);
  const [countries, setCountries] = useState([]);
  const [originalCountries, setOriginalCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [regionSelected, setRegionSelected] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await getAllCountries();
        setCountries(data);
        setOriginalCountries(data);
        setLoading(false);
      } catch (err) {
        enqueueSnackbar(
          'An unexpected error ocurred.',
          { action: <RefreshButton /> },
        );
      }
    };
    getCountries();
  }, []);

  const updateAppTheme = () => {
    setIsDarkThemeActive(!isDarkThemeActive);
  };

  const searchCountries = (value) => {
    setRegionSelected('');
    setSearchText(value);
    const text = value.toUpperCase();
    const wordsMatch = (word) => word.name.toUpperCase().indexOf(text) > -1;
    const filteredCountries = [];
    originalCountries.forEach((country) => {
      if (wordsMatch(country)) {
        filteredCountries.push(country);
      }
    });
    setCountries(filteredCountries);
  };

  const filterByRegion = (region) => {
    setSearchText('');
    if (region) setCountries(originalCountries.filter((country) => country.region === region));
    else setCountries(originalCountries);
  };

  const handleRegion = (region) => {
    setRegionSelected(region);
    filterByRegion(region);
  };

  const providerValue = {
    data: {
      isDarkThemeActive,
      countries,
      loading,
      searchText,
      regionSelected,
    },
    actions: {
      updateAppTheme,
      searchCountries,
      filterByRegion,
      handleRegion,
    },
  };

  return (
    <AppContext.Provider value={providerValue}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
