import styled from 'styled-components';
import { padding, transitions } from 'polished';
import { applyStyleModifiers, ModifiersConfig } from 'styled-components-modifiers';

import { ButtonProps } from './button.types';

import { spacing, typeScale, respondToMax } from '@infrastructure';

const BUTTON_MODIFIERS: ModifiersConfig = {
  error: ({ theme }) => `
    color: ${theme.color.textColorInverted};
    background-color: ${theme.color.errorColor};

    &:hover {
      background-color: ${theme.color.errorColorHover};
    }

    &:active {
      background-color: ${theme.color.errorColorActive};
    }
  `,
};

const StyledButton = styled.button<ButtonProps>`
  ${padding(spacing.small, spacing.xmedium)}
  ${transitions('color 0.3s ease-in-out', 'background-color 0.3s ease-in-out')}

  cursor: pointer;
  font-size: ${typeScale.paragraph};
  color: ${({ theme }) => theme.color.textColorOnPrimary};
  background-color: ${({ theme }) => theme.color.primaryColor};

  &:hover {
    color: ${({ theme }) => theme.color.textColorOnPrimary};
    background-color: ${({ theme }) => theme.color.primaryHoverColor};
  }

  &:focus {
    outline-offset: 2px;
    outline: 3px solid ${({ theme }) => theme.color.primaryHoverColor};
  }

  &:active {
    color: ${({ theme }) => theme.color.textColorOnPrimary};
    border-color: ${({ theme }) => theme.color.primaryActiveColor};
    background-color: ${({ theme }) => theme.color.primaryActiveColor};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.color.textOnDisabled};
    background-color: ${({ theme }) => theme.color.disabled};
  }

  ${respondToMax.xmobile`
    ${padding(spacing.xsmall, spacing.small)}

    font-size: ${typeScale.helperText};
  `}

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const S = {
  StyledButton,
};

export default S;
