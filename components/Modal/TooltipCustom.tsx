import { Tooltip, TooltipProps } from '@chakra-ui/react';
import React from 'react';

const TooltipCustom = ({ children, ...rest }: TooltipProps) => {
  return <Tooltip {...rest}>{children}</Tooltip>;
};

export default TooltipCustom;
