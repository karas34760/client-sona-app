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
                onClick={() => disconnect()}
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

          <Button
            variant="primary"
            width="full"
            py={6}
            borderRadius="none"
            border="none"
            borderTop="0.063rem solid"
            borderColor="primary.purple.500"
            onClick={onClose}
            position="absolute"
            bottom={0}
          >
            Close
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProfileDrawer;
