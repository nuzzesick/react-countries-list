import React, { useContext } from 'react';
import {
  Container, Spinner, DoubleBounce1, DoubleBounce2,
} from './Loading.styles';
import AppContext from '../../context/AppContext';

const Loading = () => {
  const context = useContext(AppContext);
  const { data: { isDarkThemeActive } } = context;
  return (
    <Container>
      <Spinner>
        <DoubleBounce1 isDarkThemeActive={isDarkThemeActive} />
        <DoubleBounce2 isDarkThemeActive={isDarkThemeActive} />
      </Spinner>
    </Container>
  );
};

export default Loading;
