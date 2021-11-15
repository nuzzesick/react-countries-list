import styled from 'styled-components';
import {
  lg, md, sm, xl, xxl,
} from '../../assets/breakpoints';
import { ternaryThemeColor, themeTransition, whiteColor } from '../../assets/commons';
import Icons from '../../assets/icons';
import { darkTheme, lightTheme } from '../../assets/themes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  a {
    width: fit-content;
  }
`;

export const BackButton = styled.span`
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 3px;
  padding: 0.8rem 2.6rem;
  box-shadow: ${(isDarkThemeActive) => (isDarkThemeActive ? darkTheme['card-shadow'] : lightTheme['card-shadow'])};
  font-size: 1rem;
  transition: ${themeTransition};
  color: ${ternaryThemeColor};
`;

export const BackIcon = styled(Icons.backIcon)`
  width: 0.8rem;
  margin-right: 1rem;
  path {
    transition: ${themeTransition};
    stroke: ${ternaryThemeColor};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 4rem 0;
  @media (min-width: ${md}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const CountryImageContainer = styled.div`
  flex: 2 auto;
  width: 100%;
  @media (min-width: ${md}) {
    padding-right: 3rem;
    width: 60%;
  }
`;

export const CountryImage = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 12rem;
  @media(min-width: ${sm}) {
    height: 14rem;
  }
  @media(min-width: ${md}) {
    height: 16rem;
  }
  @media(min-width: ${lg}) {
    height: 18rem;
  }
  @media(min-width: ${xl}) {
    height: 20rem;
  }
  @media(min-width: ${xxl}) {
    height: 22rem;
  }
`;

export const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 auto;
`;

export const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CountryName = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${ternaryThemeColor};
  transition: ${themeTransition};
  margin: 0 0 2.2rem 0;
  @media (min-width: ${xl}) {
    font-size: 1.3rem;
  }
  @media (min-width: ${xxl}) {
    font-size: 1.4rem;
  }
`;

export const CountryDetails = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${md}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Detail = styled.div`
  color: ${ternaryThemeColor};
  transition: ${themeTransition};
  margin-bottom: 0.6rem;
`;

export const BordersCountries = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: ${ternaryThemeColor};
  transition: ${themeTransition};
`;

export const BorderCountry = styled.span`
  display: block;
  color: ${ternaryThemeColor};
  background-color: ${({ isDarkThemeActive }) => (isDarkThemeActive ? darkTheme['dark-blue'] : whiteColor)};
  box-shadow: ${(isDarkThemeActive) => (isDarkThemeActive ? darkTheme['card-shadow'] : lightTheme['card-shadow'])};
  width: 6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  margin: 0.4rem;
  padding: 0.4rem 1.4rem;
  border-radius: 3px;
  transition: ${themeTransition};
`;
