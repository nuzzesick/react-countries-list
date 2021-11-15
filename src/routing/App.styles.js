import styled from 'styled-components';
import { appPaddingX } from '../assets/commons';
import {
  sm, md, lg, xl, xxl,
} from '../assets/breakpoints';

export const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 7rem ${appPaddingX.default};
  @media (min-width: ${sm}) {
    padding: 7.4rem ${appPaddingX.sm};
  }
  @media (min-width: ${md}) {
    padding: 8rem ${appPaddingX.md};
  }
  @media (min-width: ${lg}) {
    padding: 8rem ${appPaddingX.lg};
  }
  @media (min-width: ${xl}) {
    padding: 8rem ${appPaddingX.xl};
  }
  @media (min-width: ${xxl}) {
    padding: 8rem ${appPaddingX.xxl};
  }
`;
