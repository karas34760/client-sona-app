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
export const Text: ComponentStyleConfig = {
  variants: {
    type_title: (props: StyleFunctionProps) => ({
      fontSize: { lg: '3rem', base: '2rem' },
      fontWeight: 'bold',
      color: 'primary.purple.500',
    }),
  },
};
export const Button: ComponentStyleConfig = {
  variants: {
    navigation: {
      borderRadius: 'full',
      bg: 'white',
      color: 'primary.gray.800',
      height: '50px',
      width: '50px',
    },
    primary: {
      border: '0.063rem solid',
      borderColor: 'primary.purple.400',
      color: 'primary.purple.500',
      px: 4,
    },
  },
};
export const fonts = {
  body: `'Work Sans', sans-serif`,
  /*   body: `'Inter',sans-serif`, */
};

const theme = extendTheme({
  fonts,
  colors,
  config,
  components: {
    Text,
    Button,
  },
});

export default theme;
