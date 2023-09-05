import { Text, HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import WalletIcon from 'public/assets/icons/generals/wallet.svg';
const ConnectWallet = () => {
  return (
    <>
      <HStack
        bg="gradient.200"
        color="white"
        borderRadius="3xl"
        px={6}
        py={3}
        cursor="pointer"
      >
        <Text fontWeight="bold" display={{ lg: 'inline-block', base: 'none' }}>
          {' '}
          Connect Wallet
        </Text>
        <Icon as={WalletIcon} />
      </HStack>
    </>
  );
};

export default ConnectWallet;
