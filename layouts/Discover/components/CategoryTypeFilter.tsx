import { FormControl, Text } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import React from 'react';

import { FilterDataProps } from '../DiscoverHead';

import { categoryEvent } from '@/utils/constants/constants';
interface IProps {
  // eslint-disable-next-line no-unused-vars
  updateFields: (fields: Partial<FilterDataProps>) => void;
}
const CategoryTypeFilter = ({ updateFields }: IProps) => {
  return (
    <FormControl variant="create_form">
      <Text fontSize="xl" fontWeight="bold" mb={3}>
        Event Category
      </Text>
      <Select
        isMulti
        placeholder="Event Category"
        name="category"
        onChange={e => {
          updateFields({ category: e as any });
        }}
        options={categoryEvent}
      />
    </FormControl>
  );
};

export default CategoryTypeFilter;
