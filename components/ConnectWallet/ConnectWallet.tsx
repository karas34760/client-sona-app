import { Text, HStack, Icon, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import SelectWallet from './SelectWallet';

import WalletIcon from 'public/assets/icons/generals/wallet.svg';
const ConnectWallet = () => {
  /*   async function logMovies() {
    const response = await fetch(
      'http://192.168.1.31:8080/api/v1/account/0sxbdfc529688922fb5036d9439a7cd61d61114f600'
    );
    const movies = await response.json();
        console.log(movies);
  } */
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack
        bg="gradient.200"
        color="white"
        borderRadius="3xl"
        px={6}
        py={3}
        cursor="pointer"
        onClick={onOpen}
      >
        <Text fontWeight="bold" display={{ lg: 'inline-block', base: 'none' }}>
          Connect Wallet
        </Text>
        <Icon as={WalletIcon} />
      </HStack>
      <SelectWallet isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ConnectWallet;
