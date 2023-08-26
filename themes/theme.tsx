import {
  ComponentStyleConfig,
  StyleFunctionProps,
  ThemeConfig,
  extendTheme,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
export const backgrounds = {
  gradient: {
    100: 'linear-gradient(62deg, #1A3E92 0%, #661B88 100%)',
    200: 'linear-gradient(214deg, #B75CFF 0%, #671AE4 100%)',
    300: 'linear-gradient(62deg, #1A3E92 0%, #661B88 100%)',
  },
};
export const colors = {
  primary: {
    purple: {
      100: '#CDC0FF',
      200: '#B6A5FE',
      300: '#967DFD',
      400: '#866AFA',
      500: '#6F4FF2',
      600: '#7879F1',
    },
    gray: {
      50: '#FAFAFA',
      100: '#F4F4F5',
      200: '#F8F7FA',
      300: '#E4E4E7',
      400: '#A1A1AA',
      500: '#71717A',
      600: '#52525B',
      700: '#3F3F46',
      800: '#27272A',
    },
  },
  dark: {
    100: '#0C0C0C',
    200: '#14141F',
  },
  secondary: {
    success: {
      100: '#B8F5D0',
      200: '#88EEB1',
      300: '#58E791',
      400: '#29E072',
      500: '#0CC857',
    },
  },
  divide: {
    100: '#EAECF0',
  },
  ...backgrounds,
};

/* const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      overflowX: 'hidden',
    },
  }),
}; */
export const fonts = {
  body: `'Work Sans', sans-serif`,
};

const theme = extendTheme({
  fonts,
  colors,
  config,
});

export default theme;
