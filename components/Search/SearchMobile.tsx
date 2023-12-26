import { IconButton, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import UltraSearchModal from './SearchModal';

import SearchIcon from 'public/assets/icons/generals/search.svg';

interface UltraSearchMobileProps {
  placeholder: string;
}

export default function SearchMobile({ placeholder }: UltraSearchMobileProps) {
  const { isOpen, onClose, onToggle } = useDisclosure();
  return (
    <>
      <IconButton
        minWidth="unset"
        height="unset"
        variant="unstyled"
        aria-label="search-ultra-icon"
        color="white"
        icon={<SearchIcon />}
        onClick={onToggle}
      />

      {isOpen && (
        <UltraSearchModal
          isOpen={isOpen}
          onClose={onClose}
          placeholder={placeholder}
        />
      )}
    </>
  );
}
