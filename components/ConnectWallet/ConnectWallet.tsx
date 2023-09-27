import {
  Text,
  HStack,
  Icon,
  useDisclosure,
  Box,
  Button,
} from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import React, { useCallback } from 'react';

import SelectWallet from './SelectWallet';

import { metaMask } from '@/utils/connectors/metaMask';
import { walletConnect } from '@/utils/connectors/walletConnect';
import WalletIcon from 'public/assets/icons/generals/wallet.svg';

const ConnectWallet = () => {
  const { account } = useWeb3React();

  const disconnect = useCallback(async () => {
    const connector = metaMask || walletConnect;
    localStorage.removeItem('connectorId');
    if (connector.deactivate) {
      connector.deactivate();
    } else {
      connector.resetState();
    }
    // @ts-expect-error close can be returned by wallet
    if (connector && connector.close) {
      // @ts-expect-error close can be returned by wallet
      await connector.close();
    }
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {account === undefined ? (
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
          <Box>{account}</Box>
          <Button onClick={() => disconnect()}>DisConnect</Button>
        </>
      )}
      <SelectWallet isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default ConnectWallet;
