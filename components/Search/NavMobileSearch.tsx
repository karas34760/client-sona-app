import { Center, Icon, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import SearchIcon from 'public/assets/icons/generals/search.svg';
const NavMobileSearch = () => {
  const bg = useColorModeValue('primary.gray.200', 'dark.100');
  return (
    <>
      <Center padding={4} borderRadius="xl" bg={bg}>
        <Icon as={SearchIcon} height={6} width={6} />
      </Center>
    </>
  );
};

export default NavMobileSearch;
