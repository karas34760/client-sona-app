import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react';
import React, { useRef } from 'react';

import CloseIcon from 'public/assets/icons/arrow/close.svg';
import InfoIcon from 'public/assets/icons/generals/info.svg';
interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
const CartDrawer = ({ isOpen, onClose }: IProps) => {
  const ref = useRef(null);

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}

        /*  finalFocusRef={btnRef} */
      >
        <DrawerOverlay />
        <DrawerContent zIndex="popover" my={6} mr={6} borderRadius="1rem">
          <DrawerHeader
            display="flex"
            alignItems="center"
            width="full"
            justifyContent="space-between"
          >
            <Flex alignItems="center" gap={2}>
              <Text>Your Cart</Text>

              <Icon
                as={InfoIcon}
                height={5}
                width={5}
                cursor="pointer"
                ref={ref}
              />
            </Flex>
            <Icon as={CloseIcon} onClick={onClose} cursor="pointer" />
          </DrawerHeader>
          <DrawerBody>dsads</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartDrawer;
