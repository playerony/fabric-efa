import { createGlobalStyle } from 'styled-components';

import { typeScale } from '../variables';

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-size: ${typeScale.helperText};
    color: ${({ theme }) => theme.color.textColor};
    background-color: ${({ theme }) => theme.color.primaryBackground};
  }
`;
