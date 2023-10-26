import { HStack, Icon, StackProps, Text } from '@chakra-ui/react';
import React from 'react';

import ArrowIcon from 'public/assets/icons/arrow/down.svg';
import FilterIcon from 'public/assets/icons/generals/filter.svg';
interface IProps {
  isOpen: boolean;
  onToggle: () => void;
  sx?: StackProps;
}
const DiscoverFilterButton = ({ isOpen, onToggle, sx }: IProps) => {
  return (
    <>
      <HStack
        bg="primary.gray.200"
        color="primary.gray.600"
        borderRadius="lg"
        px={4}
        py={2}
        cursor="pointer"
        onClick={onToggle}
        {...sx}
      >
        <Icon
          as={isOpen ? ArrowIcon : FilterIcon}
          transform={isOpen ? 'rotate(90deg)' : undefined}
        />
        <Text fontWeight="bold">Filters</Text>
      </HStack>
    </>
  );
};

export default DiscoverFilterButton;
