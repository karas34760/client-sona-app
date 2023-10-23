import { HStack } from '@chakra-ui/react';
import React from 'react';

import NavSearch from '@/components/Search/NavSearch';
/// Discover Head include filter , search , Select  type Filter,

const DiscoverHead = () => {
  return (
    <>
      <HStack>
        <NavSearch />
      </HStack>
    </>
  );
};

export default DiscoverHead;
