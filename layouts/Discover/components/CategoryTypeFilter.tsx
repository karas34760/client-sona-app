import { FormControl, Text } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import React from 'react';

import { categoryEvent } from '@/utils/constants/constants';

const CategoryTypeFilter = () => {
  return (
    <FormControl variant="create_form">
      <Text fontSize="xl" fontWeight="bold" mb={3}>
        Event Category
      </Text>
      <Select
        isMulti
        placeholder="Event Category"
        name="category"
        options={categoryEvent}
      />
    </FormControl>
  );
};

export default CategoryTypeFilter;
