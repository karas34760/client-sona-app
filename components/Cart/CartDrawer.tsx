import {
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import CartTooltip from './CartTooltip';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
const CartDrawer = ({ isOpen, onClose }: IProps) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        trapFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent zIndex="popover" my={6} mr={6} borderRadius="1rem">
          <DrawerHeader
            display="flex"
            alignItems="center"
            width="full"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <Text>Your Cart</Text>
              <CartTooltip />
            </Flex>
            <CloseButton onClick={onClose} />
          </DrawerHeader>
          <DrawerBody>dsads</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartDrawer;
