/* eslint-disable no-unused-vars */
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
import React, { useCallback } from 'react';

import {
  hooks as coinbaseWallethooks,
  coinbaseWallet,
} from '@/utils/connectors/coinbaseWallet';
import { getName } from '@/utils/connectors/getConnectorName';
import { hooks as metaMaskhooks, metaMask } from '@/utils/connectors/metaMask';
import {
  hooks as walletConnecthooks,
  walletConnect,
} from '@/utils/connectors/walletConnect';
import { WalletProps } from '@/utils/type';
import CoinBaseIcon from 'public/assets/icons/wallet/coinbase.svg';
import MetaMaskIcon from 'public/assets/icons/wallet/metamask.svg';
import WalletIcon from 'public/assets/icons/wallet/wallet-connect.svg';
interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
const { useIsActivating: useMMIsActivating } = metaMaskhooks;
const { useIsActivating: useWCIsActivating } = walletConnecthooks;
const { useIsActivating: useCBIsActivating } = coinbaseWallethooks;
const SelectWallet = ({ isOpen, onClose }: IProps) => {
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

  const isMMActivating = useMMIsActivating();
  const isWCActivating = useWCIsActivating();
  const isCBActivating = useCBIsActivating();

  const activateConnector = useCallback(async (label: string) => {
    try {
      switch (label) {
        case 'MetaMask':
          await metaMask.activate();
          window.localStorage.setItem('connectorId', getName(metaMask));
          break;

        case 'WalletConnect':
          await walletConnect.activate();
          window.localStorage.setItem('connectorId', getName(walletConnect));
          break;

        case 'Coinbase Wallet':
          await coinbaseWallet.activate();
          window.localStorage.setItem('connectorId', getName(coinbaseWallet));
          break;

        default:
          break;
      }
    } catch (error) {
      console.log('Failed to connect wallet. Please try again.');
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
                onClick={() => activateConnector(wallet.label)}
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
