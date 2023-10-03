import {
  Text,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Button,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import { useDisconnect } from 'wagmi';

import AccountAddress from './AccountAddress';
import ListItemSetting from './ListItemSetting';
import MiniProfile from './MiniProfile';

import LogoutIcon from 'public/assets/icons/arrow/logout.svg';
interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
const ProfileDrawer = ({ isOpen, onClose }: IProps) => {
  const { disconnect } = useDisconnect();
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="sm"
        trapFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent zIndex="popover" my={4} mr={4} borderRadius="1rem">
          <Flex flexDirection="column" gap={4} py={6} px={6}>
            <Flex alignItems="center" justifyContent="space-between">
              <AccountAddress />
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
            <ListItemSetting />
          </Flex>
          <MiniProfile />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProfileDrawer;
