import { Box, HStack, useDisclosure, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

import DiscoverFilterButton from './components/DiscoverFilterButton';
import MinMaxPrice from './components/MinMaxPrice';
import StatusFilter from './components/StatusFilter';
import DiscoverFilterDrawer from './DiscoverFilterDrawer';
import DiscoverResult from './DiscoverResult';

import NavSearch from '@/components/Search/NavSearch';
import SelectTypeOne from '@/components/Select/SelectTypeOne';
import { optionFilter } from '@/utils/constants/constants';

const DiscoverHead = () => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
  const [selectValue, setSelectValue] = useState(optionFilter[0]);
  return (
    <>
      <HStack gap={4}>
        <DiscoverFilterDrawer />
        <DiscoverFilterButton
          isOpen={isOpen}
          onToggle={onToggle}
          sx={{
            display: { md: 'flex', base: 'none' },
          }}
        />
        <Box display={{ md: 'block', base: 'none' }} flexGrow={1}>
          <NavSearch />
        </Box>

        <SelectTypeOne
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          data={optionFilter}
        />
      </HStack>
      <Flex py={6} gap={{ md: 4, base: 0 }} transition="all .5s">
        {isOpen ? (
          <>
            <Box
              position="sticky"
              top="104px"
              height="fit-content"
              w={{ md: '300px' }}
              border="0.063rem solid"
              /*   boxShadow="shadow.200" */
              borderColor="primary.gray.300"
              py={4}
              px={6}
              display={{
                md: 'block',
                base: 'none',
              }}
              borderRadius="xl"
            >
              <StatusFilter />
              <MinMaxPrice />
            </Box>
          </>
        ) : (
          <></>
        )}

        <Box width="full" flexGrow={1} height="650px">
          <DiscoverResult />
        </Box>
      </Flex>
    </>
  );
};

export default DiscoverHead;
