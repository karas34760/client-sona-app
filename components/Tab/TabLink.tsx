import { Text } from '@chakra-ui/react';
import React from 'react';
import { StringParam, useQueryParams } from 'use-query-params';

interface IProps {
  label: string;
  params: any;
  isActive: boolean;
}
const TabLink = ({ label, params, isActive }: IProps) => {
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useQueryParams({
    tab: StringParam,
  });
  return (
    <Text
      fontSize="lg"
      cursor="pointer"
      variant="type_categories"
      key={label}
      color={isActive ? 'white' : 'primary.purple.400'}
      borderColor={isActive ? 'primary.purple.500' : 'primary.purple.400'}
      bg={isActive ? 'primary.purple.400' : 'none'}
      _hover={{
        color: isActive ? 'none' : 'white',
        bg: isActive ? 'none' : 'primary.purple.400',
      }}
      onClick={() => setQuery(params)}
    >
      {label}
    </Text>
  );
};
// todo Delete
export default TabLink;
