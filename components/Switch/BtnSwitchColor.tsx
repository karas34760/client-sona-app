import { Icon, useColorMode } from '@chakra-ui/react';
import React from 'react';

import MoonIcon from 'public/assets/icons/generals/moon.svg';
import SunIcon from 'public/assets/icons/generals/sun.svg';
const BtnSwitchColor = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Icon
        height={6}
        w={6}
        cursor="pointer"
        as={colorMode == 'light' ? MoonIcon : SunIcon}
        onClick={() => toggleColorMode()}
      />
    </>
  );
};
export default BtnSwitchColor;
