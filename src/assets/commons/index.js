import { darkTheme, lightTheme } from '../themes';

export const whiteColor = 'hsl(0, 0%, 100%)';

export const ternaryThemeBackground = ({ isDarkThemeActive }) => (isDarkThemeActive ? darkTheme['very-dark-blue'] : whiteColor);

export const ternaryThemeColor = ({ isDarkThemeActive }) => (isDarkThemeActive ? whiteColor : lightTheme['very-dark-blue']);

export const ternaryInputColor = ({ isDarkThemeActive }) => (isDarkThemeActive ? whiteColor : lightTheme['input-gray']);

export const themeTransition = '0.8s';

export const appPaddingX = {
  default: '3rem',
  sm: '3.4rem',
  md: '3.8rem',
  lg: '4.2rem',
  xl: '4.6rem',
  xxl: '5rem',
};

export const refreshButtonColor = 'hsl(208deg 38% 62%)';
