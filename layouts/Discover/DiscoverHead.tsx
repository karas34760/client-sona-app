import { Box, HStack, useDisclosure, Flex } from '@chakra-ui/react';
import React from 'react';

import CategoryTypeFilter from './components/CategoryTypeFilter';
import DiscoverFilterButton from './components/DiscoverFilterButton';
import MinMaxPrice from './components/MinMaxPrice';
import StatusFilter from './components/StatusFilter';
import DiscoverFilterDrawer from './DiscoverFilterDrawer';
import DiscoverResult from './DiscoverResult';

const DiscoverHead = () => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

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
              <Flex flexDir="column" gap={6}>
                <CategoryTypeFilter />
                <StatusFilter />
                <MinMaxPrice />
              </Flex>
            </Box>
          </>
        ) : (
          <></>
        )}

        <Box width="full" flexGrow={1} height="650px">
          <DiscoverResult isOpen={isOpen} />
        </Box>
      </Flex>
    </>
  );
};

export default DiscoverHead;
