import {
  Box,
  Flex,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React, { useEffect } from 'react';

import { useListenMetaMask } from '@/hooks/useListenMetaMask';
import { useMetaMask } from '@/hooks/useMetaMask';
import { WalletProps } from '@/utils/type';
import CoinBaseIcon from 'public/assets/icons/wallet/coinbase.svg';
import MetaMaskIcon from 'public/assets/icons/wallet/metamask.svg';
import WalletIcon from 'public/assets/icons/wallet/wallet-connect.svg';
interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
const SelectWallet = ({ isOpen, onClose }: IProps) => {
  const { dispatch } = useMetaMask();
  const listen = useListenMetaMask();
  const ListWalletSupport: WalletProps[] = [
    {
      label: 'MetaMask',
      value: 'MetaMask',
      icon: MetaMaskIcon,
      url: '',
    },
    {
      label: 'WalletConnect',
      value: 'WalletConnect',
      icon: WalletIcon,
      url: '',
    },
    {
      label: 'Coinbase Wallet',
      value: 'CoinbaseWallet',
      icon: CoinBaseIcon,
      url: '',
    },
  ];

  useEffect(() => {
    if (typeof window !== undefined) {
      // start by checking if window.ethereum is present, indicating a wallet extension
      const ethereumProviderInjected = typeof window.ethereum !== 'undefined';
      // this could be other wallets so we can verify if we are dealing with metamask
      // using the boolean constructor to be explecit and not let this be used as a falsy value (optional)
      const isMetamaskInstalled =
        ethereumProviderInjected && Boolean(window.ethereum.isMetaMask);

      const local = window.localStorage.getItem('metamaskState');

      // user was previously connected, start listening to MM
      if (local) {
        listen();
      }

      // local could be null if not present in LocalStorage
      const { wallet, balance } = local
        ? JSON.parse(local)
        : // backup if local storage is empty
          { wallet: null, balance: null };

      dispatch({ type: 'pageLoaded', isMetamaskInstalled, wallet, balance });
    }
  }, []);
  const { t } = useTranslation();
  const bgColor = useColorModeValue('white', 'primary.gray.800');
  const borderColor = useColorModeValue('primary.gray.300', 'primary.gray.500');
  const bgHover = useColorModeValue('primary.gray.300', 'primary.gray.500');
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="20px" bg={bgColor}>
        <Box
          textAlign="center"
          padding={6}
          borderBottom="0.063rem solid"
          borderBottomColor={borderColor}
        >
          <Text fontWeight="bold" lineHeight="28px" fontSize="2xl" mb={4}>
            {t('connect_your_wallet')}
          </Text>

          <Text>
            {t('connect_wallet_intro')}
            <Link
              onClick={onClose}
              href="#"
              style={{
                fontWeight: 'bold',
                color: '',
              }}
            >
              Learn More
            </Link>
          </Text>
        </Box>
        <ModalCloseButton />
        <ModalBody padding={0}>
          <Flex
            flexDirection="column"
            py={8}
            justifyContent="center"
            verticalAlign="center"
            width="full"
            borderBottom="0.063rem solid"
            borderBottomColor={borderColor}
          >
            {ListWalletSupport.map(wallet => (
              <HStack
                key={wallet.value}
                cursor="pointer"
                gap={4}
                py={4}
                px={8}
                _hover={{
                  backgroundColor: bgHover,
                }}
              >
                <Icon as={wallet.icon} width={8} height={8} />
                <Text fontWeight="bold">{wallet.label}</Text>
              </HStack>
            ))}
          </Flex>
        </ModalBody>
        <ModalFooter display="flex" justifyContent="center" alignItems="center">
          <Text
            cursor="pointer"
            fontWeight="bold"
            fontSize="lg"
            onClick={onClose}
          >
            Close
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SelectWallet;
