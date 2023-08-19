import {
  ComponentStyleConfig,
  ThemeConfig,
  extendTheme,
} from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
export const colors = {};
const theme = extendTheme({
  config,
});

export default theme;
