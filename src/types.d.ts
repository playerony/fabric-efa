import 'fabric';
import 'styled-components';
import { defaultTheme } from '@infrastructure';

type Theme = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
