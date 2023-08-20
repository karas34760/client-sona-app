import React from 'react';
import { useTranslation } from 'next-i18next';
import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import SearchIcon from 'public/assets/icons/generals/search.svg';
const NavSearch = () => {
  const { t } = useTranslation();
  return (
    <>
      <InputGroup>
        <InputLeftElement>
          <Icon as={SearchIcon} h={6} w={6} color="primary.purple.500" />
        </InputLeftElement>
        <Input
          background="primary.gray.300"
          placeholder={t('search_place_holder')}
          borderRadius="8px"
          minWidth="25rem"
        />
      </InputGroup>
    </>
  );
};

export default NavSearch;
