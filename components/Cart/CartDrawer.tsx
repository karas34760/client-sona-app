import { Center, Icon, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import ShoppingCart from 'public/assets/icons/generals/shopping-cart.svg';
const CartDrawer = () => {
  const bg = useColorModeValue('primary.gray.300', 'dark.100');
  return (
    <Center padding={4} borderRadius="xl" bg={bg} cursor="pointer">
      <Icon as={ShoppingCart} height={6} width={6} />
    </Center>
  );
};

export default CartDrawer;
