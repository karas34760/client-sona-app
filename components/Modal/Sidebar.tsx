import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  useColorModeValue,
  Text,
  Button,
} from '@chakra-ui/react';
import React from 'react';

import BtnSwitchColor from '../Switch/BtnSwitchColor';
/* import BtnSwitchLanguage from '../Switch/BtnSwitchLanguage';

import ListNavHeader from '@/layouts/Header/components/ListNavHeader'; */
interface IProps {
  onClose: () => void;
  isOpen: boolean;
}
const Sidebar = ({ onClose, isOpen }: IProps) => {
  const bg = useColorModeValue('white', 'dark.200');
  return (
    <Drawer placement="left" size="full" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent bg={bg}>
        <DrawerBody mt="100px">
          <HStack justifyContent="space-between">
            <Text>Switch Color</Text>
            <BtnSwitchColor />
          </HStack>
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
            left={0}
            bottom={0}
          >
            Close
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
