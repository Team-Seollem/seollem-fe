import 'styled-components';
import { ColorType, FontSizeType } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorType;
    fontSize: FontSizeType;
  }
}
