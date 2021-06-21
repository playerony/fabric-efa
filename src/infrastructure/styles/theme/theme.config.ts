import { Theme } from './theme.types';

import { blue, neutral } from '../variables/colors';

export const defaultTheme: Theme = {
  color: {
    disabled: neutral[400],
    primaryColor: blue[300],
    textColor: neutral[600],
    textOnDisabled: neutral[300],
    primaryBackground: neutral[100],
    secondaryBackground: neutral[500],
  },
};
