import React from 'react';
import ShoppingCart from 'public/assets/icons/generals/shopping-cart.svg';
import { Center, Icon, useColorModeValue } from '@chakra-ui/react';
const CartDrawer = () => {
  const bg = useColorModeValue('primary.gray.200', 'dark.100');
  return (
    <Center padding={4} borderRadius="xl" bg={bg}>
      <Icon as={ShoppingCart} height={6} width={6} />
    </Center>
  );
};

export default CartDrawer;
