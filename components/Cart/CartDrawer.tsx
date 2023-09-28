import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import CloseIcon from 'public/assets/icons/arrow/close.svg';
interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
const CartDrawer = ({ isOpen, onClose }: IProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}

      /*  finalFocusRef={btnRef} */
    >
      <DrawerOverlay />
      <DrawerContent zIndex="popover" my={6} mr={6} borderRadius="16px">
        <DrawerHeader
          display="flex"
          alignItems="center"
          width="full"
          justifyContent="space-between"
        >
          <Flex alignItems="center">
            <Text>Your Cart</Text>
            <Box>?</Box>
          </Flex>
          <Icon as={CloseIcon} onClick={onClose} cursor="pointer" />
        </DrawerHeader>
        <DrawerBody>dsads</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
