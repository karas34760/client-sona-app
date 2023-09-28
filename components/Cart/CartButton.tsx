import {
  Center,
  Icon,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import CartDrawer from './CartDrawer';

import ShoppingCart from 'public/assets/icons/generals/shopping-cart.svg';
const CartButton = () => {
  const bg = useColorModeValue('primary.gray.300', 'dark.100');
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Center
        padding={4}
        borderRadius="xl"
        bg={bg}
        cursor="pointer"
        onClick={onOpen}
      >
        <Icon as={ShoppingCart} height={6} width={6} />
      </Center>
      <CartDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default CartButton;
