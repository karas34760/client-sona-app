import {
  Flex,
  HStack,
  Icon,
  useDisclosure,
  Text,
  Input,
  Button,
  Collapse,
} from '@chakra-ui/react';
import React from 'react';

import ArrowIcon from 'public/assets/icons/arrow/down.svg';
// Min max price
const MinMaxPrice = () => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
  return (
    <>
      <Flex
        flexDirection="column"
        gap={2}
        borderBottom="0.063rem solid"
        pb={3}
        borderBottomColor="primary.gray.300"
      >
        <HStack
          justifyContent="space-between"
          cursor="pointer"
          onClick={onToggle}
        >
          <Text fontSize="xl" fontWeight="bold">
            Price
          </Text>
          <Icon
            as={ArrowIcon}
            transform={isOpen ? 'rotate(-180deg)' : undefined}
          />
        </HStack>
        <Collapse in={isOpen} animateOpacity>
          <Flex gap={4} alignItems="center" mb={4}>
            <Input width="auto" placeholder="Min" />
            <Text color="primary.gray.500">To</Text>
            <Input width="auto" placeholder="Max" />
          </Flex>
          <Button width="full">Apply</Button>
        </Collapse>
      </Flex>
    </>
  );
};

export default MinMaxPrice;
