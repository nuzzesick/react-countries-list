import React from 'react';

export const defaultValue = {
  data: {
    isDarkThemeActive: false,
    countries: [],
    loading: true,
    searchText: '',
    regionSelected: '',
  },
  actions: {
    updateAppTheme: () => undefined,
    searchCountries: () => undefined,
    filterByRegion: () => undefined,
    handleRegion: () => undefined,
  },
};

const AppContext = React.createContext(defaultValue);

export default AppContext;
