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
import React from 'react';
import { useAccount, useConnect } from 'wagmi';
import Web3 from 'web3';

import client from '@/graphql/client';
import { useSearchConnectMsgMutation } from '@/graphql/generates';
import { WalletProps } from '@/utils/type';
import CoinBaseIcon from 'public/assets/icons/wallet/coinbase.svg';
import MetaMaskIcon from 'public/assets/icons/wallet/metamask.svg';
import WalletIcon from 'public/assets/icons/wallet/wallet-connect.svg';
interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
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

  const { t } = useTranslation();
  const bgColor = useColorModeValue('white', 'primary.gray.800');
  const borderColor = useColorModeValue('primary.gray.300', 'primary.gray.500');
  const bgHover = useColorModeValue('primary.gray.300', 'primary.gray.500');

  const { connect, connectors } = useConnect();

  const { address } = useAccount();
  const handleAccept = async () => {
    const web3 = new Web3(window.ethereum);
    if (address) {
      const data = await useSearchConnectMsgMutation.fetcher(client, {
        address: address?.toString(),
      })();
      try {
        // @ts-ignore because web3 is defined here.
        const signature = await web3.eth.personal.sign(
          data.searchConnectMsg.message,
          address,
          ''
        );
        console.log(signature);
      } catch (err) {
        throw new Error('You need to sign the message to be able to log in.');
      }
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      isCentered
      trapFocus={false}
    >
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
            {ListWalletSupport.map((wallet, index) => (
              <HStack
                key={wallet.value}
                cursor="pointer"
                gap={4}
                py={4}
                px={8}
                onClick={async () => {
                  try {
                    await connect({ connector: connectors[index] });
                    await handleAccept();
                    onClose();
                  } catch (error) {
                    console.log('Error From Select Wallet', error);
                  }
                }}
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
