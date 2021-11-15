import styled from 'styled-components';
import {
  sm, md, lg, xl, xxl,
} from '../../assets/breakpoints';
import { darkTheme, lightTheme } from '../../assets/themes';
import { whiteColor, ternaryThemeColor, themeTransition } from '../../assets/commons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 auto;
  margin: ${({ country }) => (country ? '1rem 1rem 3rem 1rem' : '0 1rem')};
  visibility: ${({ country }) => (country ? 'visible' : 'hidden')};
  background-color: ${({ isDarkThemeActive }) => (isDarkThemeActive ? darkTheme['dark-blue'] : whiteColor)};
  box-shadow: ${({ isDarkThemeActive }) => (isDarkThemeActive ? darkTheme['card-shadow'] : lightTheme['card-shadow'])};
  transition: ${themeTransition};
  border-radius: 4px;
  width: 9rem;
  @media (min-width: ${sm}) {
    width: 10rem;
  }
  @media (min-width: ${md}) {
    width: 11rem;
  }
  @media (min-width: ${lg}) {
    width: 12rem;
  }
  @media (min-width: ${xl}) {
    width: 13rem;
  }
  @media (min-width: ${xxl}) {
    width: 14rem;
  }
  &:hover {
    transform: scale(1.03);
    box-shadow: ${({ isDarkThemeActive }) => (isDarkThemeActive ? darkTheme['card-shadow-hover'] : lightTheme['card-shadow-hover'])};
  }
`;

export const FlagImage = styled.div`
  display: block;
  width: 100%;
  height: 6rem;
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: ${sm}) {
    height: 7rem;
  }
  @media (min-width: ${md}) {
    height: 7.5rem;
  }
  @media (min-width: ${lg}) {
    height: 8.5rem;
  }
  @media (min-width: ${xl}) {
    height: 9.5rem;
  }
  @media (min-width: ${xxl}) {
    height: 10.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 2rem 1rem;
  transition: ${themeTransition};
  color: ${ternaryThemeColor};
`;

export const Name = styled.h3`
  font-weight: bold;
  font-size: 0.9rem;
  @media (min-width: ${sm}) {
    font-size: 0.95rem;
  }
  @media (min-width: ${md}) {
    font-size: 1rem;
  }
  @media (min-width: ${xxl}) {
    font-size: 1.1rem;
  }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.4rem;
  font-weight: 300;
  font-size: 0.7rem;
  @media (min-width: ${sm}) {
    font-size: 0.75rem;
  }
  @media (min-width: ${md}) {
    font-size: 0.8rem;
  }
  @media (min-width: ${xxl}) {
    font-size: 0.9rem;
  }
`;

export const CategoryName = styled.span`
  font-weight: 600;
  margin-right: 0.25rem;
`;
