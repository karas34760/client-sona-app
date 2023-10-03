import {
  Text,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Box,
  Flex,
  Button,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';

import ChakraImage from '../Custom/ChakraImage';

import MiniProfile from './MiniProfile';

import { shortenAddress } from '@/utils/format/address';
import LogoutIcon from 'public/assets/icons/arrow/logout.svg';
interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
const ProfileDrawer = ({ isOpen, onClose }: IProps) => {
  const { address } = useAccount();

  const { data: ensAvatar } = useEnsAvatar({ name: address });
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent zIndex="popover" my={4} mr={4} borderRadius="1rem">
          <Flex flexDirection="column" gap={4} py={5} px={4}>
            <Flex alignItems="center" justifyContent="space-between">
              <HStack gap={2} alignItems="center">
                <Box>
                  {ensAvatar ? (
                    <ChakraImage src={ensAvatar} alt="ENS Avatar" />
                  ) : (
                    <Jazzicon
                      diameter={40}
                      seed={jsNumberForAddress(
                        address || '0x1111111111111111111111111111111111111111'
                      )}
                    />
                  )}
                </Box>

                <Box>
                  <Text fontWeight="bold">
                    {ensName ? `${ensName} ` : shortenAddress(address)}
                  </Text>
                  <Text fontSize="sm" color="primary.gray.500" cursor="pointer">
                    View Profile
                  </Text>
                </Box>
              </HStack>
              <Button
                onClick={() => disconnect()}
                leftIcon={<Icon as={LogoutIcon} />}
              >
                Disconnect
              </Button>
            </Flex>
            <Text fontSize="3xl" fontWeight="bold">
              $0.00
            </Text>
            <Flex gap={2} justifyContent="space-between">
              <Box>
                <Box>Create Events</Box>
                <Box>Buy and Sell Ticket</Box>
                <Box>Buy Crypto</Box>
              </Box>
              <Box>
                <Box>Watch List</Box>
                <Box>Setting</Box>
                <Box>Help Center</Box>
              </Box>
            </Flex>
          </Flex>
          <MiniProfile />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProfileDrawer;
