import { Box, Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import SearchMobile from './SearchMobile';
import SearchModal from './SearchModal';

import SearchIcon from 'public/assets/icons/generals/search.svg';

export default function NavSearch() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const placeholderText = 'Search events, accounts,....';

  return (
    <>
      <Box
        display={{
          base: 'none',
          md: 'block',
        }}
      >
        <Button
          leftIcon={<SearchIcon />}
          width={{ lg: '31.25rem', md: '21.875rem' }}
          display="flex"
          justifyContent="flex-start"
          border="0.0625rem solid"
          borderColor="primary.purple.500"
          borderRadius="xl"
          onClick={onOpen}
          _hover={{}}
          _active={{}}
        >
          {placeholderText}
        </Button>

        {isOpen && (
          <SearchModal
            isOpen={isOpen}
            onClose={onClose}
            placeholder={placeholderText}
          />
        )}
      </Box>

      <Box display={{ md: 'none' }} flex={1}>
        <SearchMobile placeholder={placeholderText} />
      </Box>
    </>
  );
}
