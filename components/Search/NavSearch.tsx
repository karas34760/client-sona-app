import React from 'react';
import { useTranslation } from 'next-i18next';
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react';
import SearchIcon from 'public/assets/icons/generals/search.svg';
const NavSearch = () => {
  const { t } = useTranslation();
  const bgInput = useColorModeValue('primary.gray.300', 'primary.gray.100');
  return (
    <>
      <InputGroup>
        <InputLeftElement>
          <Icon as={SearchIcon} h={6} w={6} color="primary.purple.500" />
        </InputLeftElement>
        <Input
          background={bgInput}
          placeholder={t('search_place_holder')}
          _placeholder={{
            color: 'primary.gray.500',
          }}
          /*   color="primary.purple.500" */
          borderRadius="lg"
          _active={{
            borderColor: 'primary.purple.500',
          }}
          /*    inlinea="primary.purple.500" */
          minWidth={{ lg: '25rem', md: '300px' }}
        />
      </InputGroup>
    </>
  );
};

export default NavSearch;
