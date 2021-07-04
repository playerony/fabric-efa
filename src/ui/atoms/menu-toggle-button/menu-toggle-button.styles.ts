import styled, { css } from 'styled-components';
import { size, cover, transitions } from 'polished';

import { radius } from '@infrastructure';

import { StyledCenterLineProps } from './menu-toggle-button.types';

const LINE_HEIGHT = 4;
const WRAPPER_SIZE = 30;
const SQRT_2 = Math.sqrt(2);

const StyledWrapper = styled.div`
  ${size(WRAPPER_SIZE, WRAPPER_SIZE)}

  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const StyledCenterLine = styled.div<StyledCenterLineProps>`
  ${size(LINE_HEIGHT, '100%')}
  ${transitions('background-color 0.3s ease')}

  opacity: 1;
  box-sizing: border-box;
  border-radius: ${radius.default};
  background-color: ${({ theme }) => theme.color.primaryColor};

  &::after,
  &::before {
    ${cover()}
    ${size(LINE_HEIGHT, '100%')}
    ${transitions('transform 0.3s ease')}

    content: '';
    display: inline-block;
    box-sizing: border-box;
    transform-origin: top left;
    border-radius: ${radius.default};
    background-color: ${({ theme }) => theme.color.primaryColor};
  }

  &::after {
    top: auto;
    transform-origin: bottom left;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: transparent;

      &::after,
      &::before {
        width: ${WRAPPER_SIZE * SQRT_2 - LINE_HEIGHT}px;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    `}
`;

const S = {
  StyledWrapper,
  StyledCenterLine,
};

export default S;
