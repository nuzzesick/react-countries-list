import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer, HeaderContent, AppTitle, SwitchThemeButton, MoonIcon,
} from './Header.styles';
import AppContext from '../../context/AppContext';

const Header = () => {
  const context = useContext(AppContext);
  const { data: { isDarkThemeActive }, actions: { updateAppTheme } } = context;
  return (
    <HeaderContainer isDarkThemeActive={isDarkThemeActive}>
      <HeaderContent>
        <Link to="/">
          <AppTitle isDarkThemeActive={isDarkThemeActive}>Where in the world?</AppTitle>
        </Link>
        <SwitchThemeButton isDarkThemeActive={isDarkThemeActive} type="button" onClick={updateAppTheme}>
          <MoonIcon isDarkThemeActive={isDarkThemeActive} />
          Dark mode
        </SwitchThemeButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
