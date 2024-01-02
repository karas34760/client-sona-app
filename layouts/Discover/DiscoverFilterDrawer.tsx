import {
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import CategoryTypeFilter from './components/CategoryTypeFilter';
import DiscoverFilterButton from './components/DiscoverFilterButton';
import { FilterDataProps } from './DiscoverHead';
interface IProps {
  // eslint-disable-next-line no-unused-vars
  updateFields: (fields: Partial<FilterDataProps>) => void;
}
const DiscoverFilterDrawer = ({ updateFields }: IProps) => {
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
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          padding={6}
          px={4}
          overflow="hidden"
          display="flex"
          flexDirection="column"
          gap={6}
        >
          <Text textAlign="center" fontSize="lg" fontWeight="bold">
            Discover Events
          </Text>
          <CategoryTypeFilter updateFields={updateFields} />
          <Button variant="draw_close" onClick={onClose} borderRadius="none">
            Close
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DiscoverFilterDrawer;
