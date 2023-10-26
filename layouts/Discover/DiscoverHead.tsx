import { Box, HStack, useDisclosure, Text, Icon, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

import StatusFilter from './components/StatusFilter';

import NavSearch from '@/components/Search/NavSearch';
import SelectTypeOne from '@/components/Select/SelectTypeOne';
import { optionFilter } from '@/utils/constants/constants';
import ArrowIcon from 'public/assets/icons/arrow/down.svg';
import FilterIcon from 'public/assets/icons/generals/filter.svg';

const DiscoverHead = () => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
  const [selectValue, setSelectValue] = useState(optionFilter[0]);
  return (
    <>
      <HStack gap={6}>
        <HStack
          bg="primary.gray.200"
          borderRadius="lg"
          px={4}
          py={2}
          cursor="pointer"
          onClick={onToggle}
        >
          <Icon
            as={isOpen ? ArrowIcon : FilterIcon}
            transform={isOpen ? 'rotate(90deg)' : undefined}
          />
          <Text fontWeight="bold">Filters</Text>
        </HStack>
        <NavSearch />
        <SelectTypeOne
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          data={optionFilter}
        />
      </HStack>
      <Flex py={6} gap={{ md: 6, base: 0 }} transition="all .5s">
        {isOpen ? (
          <>
            <Box
              width={{ md: '380px' }}
              border="0.063rem solid"
              borderColor="primary.gray.300"
              py={4}
              px={6}
              borderRadius="xl"
            >
              <StatusFilter />
            </Box>
          </>
        ) : (
          <></>
        )}

        <Box flexGrow={1} bg="primary.gray.400">
          dsadsa
        </Box>
      </Flex>
    </>
  );
};

export default DiscoverHead;
