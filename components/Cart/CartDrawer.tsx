import React from 'react';
import ShoppingCart from 'public/assets/icons/generals/shopping-cart.svg';
import { Box, Center, Icon, IconButton } from '@chakra-ui/react';
const CartDrawer = () => {
  return (
    <Center>
      <Icon as={ShoppingCart} height={6} width={6} />
    </Center>
  );
};

export default CartDrawer;
