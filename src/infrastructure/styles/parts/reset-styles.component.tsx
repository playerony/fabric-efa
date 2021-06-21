import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

import { fontFamily } from '@infrastructure';

export const ResetStyles = createGlobalStyle`
  ${normalize()}

  * {
    border: 0;
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    font-family: ${fontFamily};
  }
`;
