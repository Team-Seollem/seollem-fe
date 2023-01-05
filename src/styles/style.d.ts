import 'styled-components';
import { ColorType } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorType;
  }
}
