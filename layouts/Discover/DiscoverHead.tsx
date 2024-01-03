import { useQuery } from '@apollo/client';
import { Box, HStack, useDisclosure, Flex, Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import CategoryTypeFilter from './components/CategoryTypeFilter';
import DiscoverFilterButton from './components/DiscoverFilterButton';
import DiscoverFilterDrawer from './DiscoverFilterDrawer';
import DiscoverResult from './DiscoverResult';

import LoadingData from '@/animations/Loading/LoadingData';
import { SEARCH_EVENTS } from '@/graphql/query';
import { optionEventType } from '@/utils/constants/constants';
export interface FilterDataProps {
  category?: optionEventType[];
  name?: string;
  organizer?: string;
}
const DiscoverHead = () => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  const [filter, setFilter] = useState<FilterDataProps>({
    category: [],
    name: '',
    organizer: '',
  });
  function updateFields(fields: Partial<FilterDataProps>) {
    setFilter(prev => {
      return { ...prev, ...fields };
    });
  }

  const { data, loading, refetch } = useQuery(SEARCH_EVENTS, {
    variables: {
      page: 1,
      size: 100,
      filter: {
        name: filter.name?.length ? filter.name : undefined,
        category: filter.category?.length
          ? filter.category.map((item: optionEventType) => item.value)
          : undefined,
      },
      orderBy: {
        StartTime: 'asc',
      },
    },
  });

  useEffect(() => {
    refetch();
  }, [filter]);

  return (
    <>
      <HStack gap={4}>
        <DiscoverFilterDrawer updateFields={updateFields} />
        <DiscoverFilterButton
          isOpen={isOpen}
          onToggle={onToggle}
          sx={{
            display: { md: 'flex', base: 'none' },
          }}
        />
      </HStack>
      <Flex py={6} transition="all .5s">
        {isOpen ? (
          <>
            <Box
              position="sticky"
              top="104px"
              height="fit-content"
              minW="320px"
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
                <CategoryTypeFilter updateFields={updateFields} />
                <Button width="full" bg="black" color="white">
                  Apply
                </Button>
              </Flex>
            </Box>
          </>
        ) : (
          <></>
        )}

        <Box
          width="full"
          flexGrow={1}
          px={2}
          height="650px"
          overflow="hidden"
          overflowY="scroll"
        >
          {loading ? (
            <LoadingData />
          ) : (
            <>
              <DiscoverResult isOpen={isOpen} data={data} />
            </>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default DiscoverHead;
