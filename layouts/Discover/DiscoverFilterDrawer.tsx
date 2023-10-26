import {
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import DiscoverFilterButton from './components/DiscoverFilterButton';
import MinMaxPrice from './components/MinMaxPrice';
import StatusFilter from './components/StatusFilter';

const DiscoverFilterDrawer = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <>
      <DiscoverFilterButton
        isOpen={isOpen}
        onToggle={onToggle}
        sx={{
          display: { md: 'none', base: 'flex' },
        }}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent padding={6} px={4} overflow="hidden">
          <StatusFilter />
          <MinMaxPrice />
          <Button variant="draw_close" onClick={onClose} borderRadius="none">
            Close
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DiscoverFilterDrawer;
