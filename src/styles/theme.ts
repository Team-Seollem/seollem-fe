const color = {
  white: '#f9f9f9',
  black: '#181818',
  gray01: '#747474',
  gray02: '#C2C2C2',
  gray03: '#D1D3D6',
  gray04: '#f1f1f1',
  skyblue01: '#A8D1E7',
  skyblue02: '#EFF7F6',
  pink01: '#FFBFC5',
  pink02: '#FEE5E0',
  primary: '#90DED8',
  primary_light: '#ccf0ed',
  negative: '#EA5966',
} as const;

const fontSize = {
  xs: '0.5rem',
  sm: '0.75rem',
  base: '1rem',
  md: '1.25rem',
  lg: '1.5rem',
} as const;
const boxShadow = {};

export type ColorType = typeof color;
export type FontSizeType = typeof fontSize;

export const theme = {
  color,
  fontSize,
};
