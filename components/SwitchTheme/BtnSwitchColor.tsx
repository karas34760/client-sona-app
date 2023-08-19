import { Icon, useColorMode } from '@chakra-ui/react';
import React from 'react';
import SunIcon from 'public/assets/generals/sun.svg';
import MoonIcon from 'public/assets/generals/moon.svg';
const ButtonSwitchColorMode = () => {
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
export default ButtonSwitchColorMode;
