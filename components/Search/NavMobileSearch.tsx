import { Center, Icon, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import SearchIcon from 'public/assets/icons/generals/search.svg';
const NavMobileSearch = () => {
  const bg = useColorModeValue('primary.gray.200', 'dark.100');
  return (
    <>
      <Center padding={3} borderRadius="xl" bg={bg}>
        <Icon as={SearchIcon} height={5} width={5} />
      </Center>
    </>
  );
};

export default NavMobileSearch;
