import { Icon, IconProps, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import VerifyIcon from 'public/assets/icons/generals/verify.svg';
const VerifySymbol = (sx?: IconProps) => {
  const colorDefault = useColorModeValue(
    'secondary.info.300',
    'secondary.info.200'
  );
  return (
    <Icon as={VerifyIcon} color={colorDefault} height={6} width={6} {...sx} />
  );
};

export default VerifySymbol;
