import styled from 'styled-components';
import {
  sm, md, lg, xl, xxl,
} from '../../assets/breakpoints';
import { whiteColor, themeTransition, ternaryInputColor } from '../../assets/commons';
import Icons from '../../assets/icons';
import { darkTheme, lightTheme } from '../../assets/themes';

export const SearchBar = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ isDarkThemeActive }) => (isDarkThemeActive ? darkTheme['dark-blue'] : whiteColor)};
  border-radius: 4px;
  box-shadow: ${({ isDarkThemeActive }) => (isDarkThemeActive ? darkTheme['search-shadow'] : lightTheme['search-shadow'])};
  padding: 0.9rem 2rem;
  transition: ${themeTransition};
  cursor: pointer;
  width: 14rem;
  @media (min-width: ${sm}) {
    width: 16rem;
  }
  @media (min-width: ${md}) {
    width: 18rem;
  }
  @media (min-width: ${lg}) {
    width: 20rem;
  }
  @media (min-width: ${xl}) {
    width: 22rem;
  }
  @media (min-width: ${xxl}) {
    width: 24rem;
  }
`;

export const SearchIcon = styled(Icons.searchIcon)`
  width: 0.9rem;
  margin-right: 0.7rem;
  @media (min-width: ${md}) {
    width: 0.95rem;
    margin-right: 0.75rem;
  }
  @media (min-width: ${lg}) {
    width: 1rem;
    margin-right: 0.8rem;
  }
  @media (min-width: ${xl}) {
    width: 1.1rem;
    margin-right: 0.85rem;
  }
  path {
    fill: ${ternaryInputColor};
    transition ${themeTransition};
  }
`;

export const SearchInput = styled.input`
  background: transparent;
  width: 100%;
  border: none;
  outline: 0;
  color: ${ternaryInputColor};
  transition: ${themeTransition};
  cursor: pointer;
  font-size: 0.7rem;
  @media (min-width: ${sm}) {
    font-size: 0.8rem;
  }
  @media (min-width: ${lg}) {
    font-size: 0.9rem;
  }
  @media (min-width: ${xxl}) {
    font-size: 1rem;
  }
  &:focus {
    border: none;
    outline: 0;
  }
  ::placeholder {
    color: ${ternaryInputColor};
    transition: ${themeTransition};
  }
`;
