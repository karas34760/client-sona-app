import { Text, HStack, Icon, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { useAccount } from 'wagmi';

import AccountMenu from './AccountMenu';
import SelectWallet from './SelectWallet';

import WalletIcon from 'public/assets/icons/generals/wallet.svg';

const ConnectWallet = () => {
  const { isConnected } = useAccount();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {!isConnected ? (
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
            <Text
              fontWeight="bold"
              display={{ lg: 'inline-block', base: 'none' }}
            >
              Connect Wallet
            </Text>
            <Icon as={WalletIcon} />
          </HStack>
        </>
      ) : (
        <>
          <AccountMenu />
        </>
      )}
      <SelectWallet isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ConnectWallet;
