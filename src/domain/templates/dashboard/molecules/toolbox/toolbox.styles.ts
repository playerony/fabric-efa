import styled, { css } from 'styled-components';
import { cover, padding, transitions } from 'polished';

import { BigHeading, MenuToggleButton } from '@ui';

import { StyledWrapperProps } from './toolbox.types';

import { spacing, respondToMax } from '@infrastructure';

const StyledWrapper = styled.div<StyledWrapperProps>`
  ${cover()}
  ${padding(spacing.medium)}
  ${transitions('transform 0.3s ease')}

  z-index: 30;
  left: unset;
  width: 300px;
  position: fixed;
  box-sizing: border-box;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: ${({ theme }) => theme.color.secondaryBackground};

  ${({ isOpen }) =>
    !isOpen &&
    css`
      pointer-event: none;
      transform: translateX(100%);
    `}

  ${respondToMax.mobile`
    width: 100%;
  `}
`;

const StyledHeading = styled(BigHeading)`
  ${padding(spacing.xlarge, spacing.small, spacing.medium)}

  text-align: center;
`;

const StyledMenuToggleButton = styled(MenuToggleButton)`
  z-index: 50;
  position: fixed;
  top: ${spacing.medium};
  right: ${spacing.medium};
`;

const StyledButtonsWrapper = styled.div`
  display: grid;
  grid-gap: ${spacing.small};
`;

const S = {
  StyledWrapper,
  StyledHeading,
  StyledButtonsWrapper,
  StyledMenuToggleButton,
};

export default S;
