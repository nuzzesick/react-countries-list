import styled from 'styled-components';
import {
  lightTheme, darkTheme,
} from '../../assets/themes';
import {
  whiteColor, ternaryThemeColor, themeTransition, appPaddingX,
} from '../../assets/commons';
import {
  sm, md, lg, xl, xxl,
} from '../../assets/breakpoints';
import Icons from '../../assets/icons';

export const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  background-color: ${({ isDarkThemeActive }) => (isDarkThemeActive ? darkTheme['dark-blue'] : whiteColor)};
  box-shadow: ${({ isDarkThemeActive }) => (isDarkThemeActive ? darkTheme['header-shadow'] : lightTheme['header-shadow'])};
  transition: ${themeTransition};
  width: 100%;
  z-index: 1;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem ${appPaddingX.default};
  @media (min-width: ${sm}) {
    padding: 1.8rem ${appPaddingX.sm};
  }
  @media (min-width: ${md}) {
    padding: 2rem ${appPaddingX.md};
  }
  @media (min-width: ${lg}) {
    padding: 2rem ${appPaddingX.lg};
  }
  @media (min-width: ${xl}) {
    padding: 2rem ${appPaddingX.xl};
  }
  @media (min-width: ${xxl}) {
    padding: 2rem ${appPaddingX.xxl};
  }
`;

export const AppTitle = styled.span`
  font-size: 0.9rem;
  @media (min-width: ${sm}) {
    font-size: 1rem;
  }
  @media (min-width: ${xxl}) {
    font-size: 1.1rem;
  }
  font-weight: 600;
  color: ${ternaryThemeColor};
  transition ${themeTransition};
`;

export const SwitchThemeButton = styled.button`
  display: flex;
  align-items: center;
  transition ${themeTransition};
  cursor: pointer;
  font-size: 0.8rem;
  @media (min-width: ${sm}) {
    font-size: 0.9rem;
  }
  @media (min-width: ${xxl}) {
    font-size: 1rem;
  }
  color: ${ternaryThemeColor};
`;

export const MoonIcon = styled(Icons.moonIcon)`
  width: 0.8rem;
  margin-right: 0.2rem;
  @media (min-width: ${md}) {
    width: 0.85rem;
    margin-right: 0.25rem;
  }
  @media (min-width: ${lg}) {
    width: 0.9rem;
    margin-right: 0.3rem;
  }
  @media (min-width: ${xl}) {
    width: 1rem;
    margin-right: 0.4rem;
  }
  path {
    fill: ${({ isDarkThemeActive }) => (isDarkThemeActive ? whiteColor : 'transparent')};
    stroke: ${ternaryThemeColor};
    transition ${themeTransition};
  }
`;
