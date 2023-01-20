import 'styled-components';
import { type themeType } from './themeType';

declare module 'styled-components' {
  export interface DefaultTheme extends themeType {}
}
