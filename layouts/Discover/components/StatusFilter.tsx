import {
  Box,
  Collapse,
  HStack,
  useDisclosure,
  Text,
  Icon,
  Flex,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import ArrowIcon from 'public/assets/icons/arrow/down.svg';
const StatusFilter = () => {
  const optionStatus = [
    {
      title: 'All',
      value: 'all',
    },
    {
      title: 'Buy Now',
      value: 'buy-ow',
    },
    {
      title: 'Live Auction',
      value: 'live-auction',
    },
  ];
  const [currentValue, setCurrentValue] = useState(optionStatus[0]);
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
            Satus
          </Text>
          <Icon
            as={ArrowIcon}
            transform={isOpen ? 'rotate(-180deg)' : undefined}
          />
        </HStack>

        <Collapse in={isOpen} animateOpacity>
          <HStack gap={4} flexWrap="wrap">
            {optionStatus.map(item => (
              <Box
                px={4}
                cursor="pointer"
                py={2}
                borderRadius="xl"
                fontWeight="bold"
                fontSize="sm"
                background={
                  currentValue.value == item.value
                    ? 'primary.gray.800'
                    : 'primary.gray.300'
                }
                color={
                  currentValue.value == item.value
                    ? 'white'
                    : 'primary.gray.600'
                }
                onClick={() => setCurrentValue(item)}
                key={item.value}
              >
                {item.title}
              </Box>
            ))}
          </HStack>
        </Collapse>
      </Flex>
    </>
  );
};

export default StatusFilter;
