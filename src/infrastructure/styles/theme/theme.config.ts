import { Theme } from './theme.types';

import { red, blue, neutral } from '../variables/colors';

export const defaultTheme: Theme = {
  color: {
    errorColor: red[100],
    disabled: neutral[400],
    primaryColor: blue[300],
    textColor: neutral[600],
    errorColorHover: red[200],
    errorColorActive: red[300],
    primaryHoverColor: blue[100],
    textOnDisabled: neutral[300],
    primaryActiveColor: blue[100],
    primaryBackground: neutral[200],
    textColorInverted: neutral[100],
    textColorOnPrimary: neutral[100],
    secondaryBackground: neutral[300],
  },
};
