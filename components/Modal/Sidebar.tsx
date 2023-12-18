import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  HStack,
  useColorModeValue,
  Text,
  Button,
  Flex,
} from '@chakra-ui/react';
import React from 'react';

import FaucetButton from '../Custom/FaucetButton';
import BtnSwitchColor from '../Switch/BtnSwitchColor';

import { useAuth } from '@/hooks/useAuth';
/* import BtnSwitchLanguage from '../Switch/BtnSwitchLanguage';

import ListNavHeader from '@/layouts/Header/components/ListNavHeader'; */
interface IProps {
  onClose: () => void;
  isOpen: boolean;
}
const Sidebar = ({ onClose, isOpen }: IProps) => {
  const bg = useColorModeValue('white', 'dark.200');
  const { user } = useAuth();
  return (
    <Drawer placement="left" size="full" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent bg={bg}>
        <DrawerBody mt="100px">
          <Flex direction="column" gap={6}>
            <HStack justifyContent="space-between">
              <Text>Switch Color</Text>
              <BtnSwitchColor />
            </HStack>
            {user && <FaucetButton />}
          </Flex>

          <Button variant="draw_close" onClick={onClose}>
            Close
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
