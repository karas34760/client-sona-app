/* eslint-disable no-unused-vars */
import { Text, HStack, Icon } from '@chakra-ui/react';
import { ConnectKitButton } from 'connectkit';
import React from 'react';
import { useAccount } from 'wagmi';

import AccountMenu from './AccountMenu';

import WalletIcon from 'public/assets/icons/generals/wallet.svg';
const ConnectWallet = () => {
  const { isConnected } = useAccount();

  return (
    <>
      {isConnected ? (
        <>
          <AccountMenu />
        </>
      ) : (
        <>
          <ConnectKitButton.Custom>
            {({
              isConnected,
              isConnecting,
              show,
              hide,
              address,
              ensName,
              chain,
            }) => {
              return (
                <HStack
                  bg="gradient.200"
                  color="white"
                  borderRadius="3xl"
                  px={6}
                  py={3}
                  cursor="pointer"
                  onClick={show}
                >
                  <Text
                    fontWeight="bold"
                    display={{ lg: 'inline-block', base: 'none' }}
                  >
                    {isConnecting ? (
                      <>Connecting...</>
                    ) : (
                      <>{isConnected ? address : ' Connect Wallet'}</>
                    )}
                  </Text>
                  <Icon as={WalletIcon} />
                </HStack>
              );
            }}
          </ConnectKitButton.Custom>
        </>
      )}
    </>
  );
};

export default ConnectWallet;
