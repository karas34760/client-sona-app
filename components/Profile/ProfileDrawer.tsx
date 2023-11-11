import {
  Text,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Button,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useDisconnect } from 'wagmi';

import AccountAddress from './AccountAddress';
import ListItemSetting from './ListItemSetting';
import MiniProfile from './MiniProfile';

import { removeFromStorage } from '@/redux/user/user-helper';
import { setUser } from '@/redux/user/user-slice';
import LogoutIcon from 'public/assets/icons/arrow/logout.svg';
interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
const ProfileDrawer = ({ isOpen, onClose }: IProps) => {
  const { disconnect } = useDisconnect();
  const dispatch = useDispatch();
  const bgDrawer = useColorModeValue('white', 'body.100');
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
        <DrawerContent
          zIndex="popover"
          my={{ md: 4, base: 0 }}
          mr={{ md: 4, base: 0 }}
          borderRadius={{ md: '1rem', base: 0 }}
          bg={bgDrawer}
          overflow="hidden"
        >
          <Flex flexDirection="column" gap={4} py={6} px={6}>
            <Flex alignItems="center" justifyContent="space-between">
              <AccountAddress onClose={onClose} />
              <Button
                onClick={() => {
                  disconnect();
                  dispatch(setUser(null));
                  removeFromStorage();
                }}
                leftIcon={<Icon as={LogoutIcon} />}
              >
                Disconnect
              </Button>
            </Flex>
            <Text fontSize="3xl" fontWeight="bold">
              $0.00
            </Text>
            <ListItemSetting onClose={onClose} />
          </Flex>
          <MiniProfile />

          <Button variant="draw_close" onClick={onClose}>
            Close
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProfileDrawer;
