import {
  ComponentStyleConfig,
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
    danger: {
      100: '#ff6969',
      200: '#ff5050',
      300: '#ff3636',
      400: '#ff1d1d',
      500: '#eb1212',
    },
    info: {
      100: '#7CB9E8',
      200: '#6CB4EE',
      300: '#007FFF',
    },
  },
  divide: {
    100: '#EAECF0',
  },
  ...backgrounds,
};

export const shadows = {
  shadow: {
    100: '0px 4px 8px 0px rgba(134, 106, 250, 0.40)',
    200: '0px 6px 32px rgba(0, 0, 0, 0.2)',
  },
};
/* const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      overflowX: 'hidden',
    },
  }),
}; */

const Text: ComponentStyleConfig = {
  variants: {
    type_title: {
      fontSize: { lg: '3rem', base: '2rem' },
      fontWeight: 'bold',
      color: 'primary.purple.500',
    },
    type_sub_title: {
      fontWeight: 'bold',
      color: 'primary.purple.500',
      fontSize: '28px',
    },
    type_categories: {
      px: 2,
      py: 1,
      fontSize: 'sm',
      textTransform: 'capitalize',
      borderRadius: 'lg',
      color: 'primary.gray.600',
      border: '0.063rem solid',
      borderColor: 'primary.gray.400',
    },
  },
};
const Tooltip: ComponentStyleConfig = {
  variants: {
    primary: {
      bg: 'white',
      color: 'primary.gray.800',
    },
  },
};
const Button: ComponentStyleConfig = {
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
      cursor: 'pointer',
      transition: 'all linear .4s',
      _hover: {
        bg: 'primary.purple.500',
        color: 'white',
      },
    },
    tab: ({ isActive }) => ({
      fontSize: 'medium',
      fontWeight: 'bold',
      color: isActive ? 'primary.purple.500' : 'primary.gray.400',
      _after: {
        content: "''",
        height: '3px',
        width: isActive ? '100%' : 0,
        backgroundColor: 'primary.purple.400',
        position: 'absolute',
        bottom: '-0.2rem',
        zIndex: 3,
        right: 0,
        opacity: isActive ? 1 : 0,
        transition: '.4s ease-in-out',
      },
    }),
  },
};
const Popover: ComponentStyleConfig = {
  variants: {
    primary: {
      content: {
        fontWeight: 'bold',
        bg: 'white',
        overflowWrap: 'break-word',
        maxWidth: '12.5rem',
        boxShadow: 'shadow.200',
        border: 'none',
        borderRadius: 'lg',
        py: 4,
        px: 4,
        textAlign: 'center',
      },
    },
  },
};
export const fonts = {
  body: `'Work Sans', sans-serif`,
  /*   body: `'Inter',sans-serif`, */
};
export const breakpoints = {
  base: '0em', // 0px
  sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
  md: '48em', // ~768px
  lg: '62em', // ~992px
  xl: '80em', // ~1280px
  '2xl': '96em', // ~1536px
};

const Select: ComponentStyleConfig = {
  variants: {
    primary: {},
  },
};

const theme = extendTheme({
  fonts,
  colors,
  shadows,
  breakpoints,
  config,
  components: {
    Text,
    Button,
    Tooltip,
    Popover,
    Select,
  },
});

export default theme;
