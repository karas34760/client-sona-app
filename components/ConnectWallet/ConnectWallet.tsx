import { Button, Icon } from '@chakra-ui/react';
import React from 'react';
import ShoppingCart from 'public/assets/icons/generals/shopping-cart.svg';
const ConnectWallet = () => {
  return (
    <>
      <Button
        bg="gradient.200"
        color="white"
        borderRadius="3xl"
        px={6}
        py={3}
        _hover={{}}
      >
        Connect Wallet
        <Icon as={ShoppingCart} />
      </Button>
    </>
  );
};

export default ConnectWallet;
