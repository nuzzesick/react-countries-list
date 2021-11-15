import styled from 'styled-components';
import {
  whiteColor, themeTransition, ternaryInputColor, ternaryThemeColor,
} from '../../assets/commons';
import { darkTheme, lightTheme } from '../../assets/themes';
import {
  sm, md, lg, xl, xxl,
} from '../../assets/breakpoints';
import Icons from '../../assets/icons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ isDarkThemeActive }) => (isDarkThemeActive ? darkTheme['dark-blue'] : whiteColor)};
  color: ${ternaryInputColor};
  border-radius: 4px;
  box-shadow: ${({ isDarkThemeActive }) => (isDarkThemeActive ? darkTheme['search-shadow'] : lightTheme['search-shadow'])};
  padding: 0.9rem 2rem;
  transition: ${themeTransition};
  cursor: pointer;
  user-select: none;
  width: 2rem;
  font-size: 0.7rem;
  @media (min-width: ${sm}) {
    width: 4rem;
    font-size: 0.8rem;
  }
  @media (min-width: ${md}) {
    width: 6rem;
  }
  @media (min-width: ${lg}) {
    width: 8rem;
    font-size: 0.9rem;
  }
  @media (min-width: ${xl}) {
    width: 10rem;
  }
  @media (min-width: ${xxl}) {
    width: 12rem;
    font-size: 1rem;
  }
`;

export const ArrowIcon = styled(Icons.arrowIcon)`
  width: 0.8rem;
  fill: ${ternaryThemeColor};
  transition: 0.2s;
  transform: ${({ open }) => open && 'rotate(180deg)'};
`;

export const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: absolute;
  margin-top: ${({ regionSelected }) => (regionSelected ? '21.5rem' : '18.5rem')};
  border-radius: 4px;
  transition: ${themeTransition};
  background-color: ${({ isDarkThemeActive }) => (isDarkThemeActive ? darkTheme['dark-blue'] : whiteColor)};
  box-shadow: ${({ isDarkThemeActive }) => (isDarkThemeActive ? darkTheme['search-shadow'] : lightTheme['search-shadow'])};
  margin-left: -2rem;
  z-index: 999;
  width: 6rem;
  font-size: 0.7rem;
  @media (min-width: ${sm}) {
    width: 8rem;
    font-size: 0.8rem;
  }
  @media (min-width: ${md}) {
    width: 10rem;
  }
  @media (min-width: ${lg}) {
    width: 12rem;
    font-size: 0.9rem;
  }
  @media (min-width: ${xl}) {
    width: 14rem;
  }
  @media (min-width: ${xxl}) {
    width: 16rem;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  color: ${({ disabled }) => (disabled ? lightTheme['dark-gray'] : ternaryInputColor)};
  padding: 1rem 0;
  cursor: pointer;
  &:hover {
    background-color: ${({ isDarkThemeActive }) => (isDarkThemeActive ? darkTheme['very-dark-blue'] : lightTheme['very-light-gray'])};
  }
`;
