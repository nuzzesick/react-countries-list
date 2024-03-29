import styled, { keyframes } from 'styled-components';
import {
  ternaryThemeColor,
} from '../../assets/commons';
import {
  sm, xl,
} from '../../assets/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1.8rem;
  @media (min-width: ${sm}) {
    width: 2rem;
  }
  @media (min-width: ${xl}) {
    width: 2.4rem;
  }
  height: 55vh;
  margin: auto;
`;

export const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 1.8rem;
  @media (min-width: ${sm}) {
    height: 2rem;
  }
  @media (min-width: ${xl}) {
    height: 2.4rem;
  }
`;

const skBounce = keyframes`
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
`;

export const DoubleBounce1 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${ternaryThemeColor};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: ${skBounce} 2.0s infinite ease-in-out;
  animation: ${skBounce} 2.0s infinite ease-in-out;
`;

export const DoubleBounce2 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${ternaryThemeColor};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: ${skBounce} 2.0s infinite ease-in-out;
  animation: ${skBounce} 2.0s infinite ease-in-out;
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
`;
