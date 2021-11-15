import React, { useContext, useRef } from 'react';
import { AppContext } from '../../context';
import { SearchBar, SearchIcon, SearchInput } from './Search.styles';

const Search = () => {
  const context = useContext(AppContext);
  const { data: { isDarkThemeActive, searchText }, actions: { searchCountries } } = context;
  const searchInput = useRef(null);
  return (
    <SearchBar
      type="button"
      onClick={() => searchInput.current.focus()}
      isDarkThemeActive={isDarkThemeActive}
    >
      <SearchIcon isDarkThemeActive={isDarkThemeActive} />
      <SearchInput
        id="search"
        name="search"
        ref={searchInput}
        value={searchText}
        onChange={(e) => { searchCountries(e.target.value); }}
        autoComplete="off"
        placeholder="Search for a country..."
        isDarkThemeActive={isDarkThemeActive}
      />
    </SearchBar>
  );
};

export default Search;
