import { Box, HStack, StackProps } from '@chakra-ui/react';
import React from 'react';

import { TabItem } from '@/utils/type';
type Props = {
  items: TabItem[];
  activeKey: string;
};
const ListTabItem = ({ activeKey, items, ...rest }: Props & StackProps) => {
  return (
    <>
      <HStack {...rest}>
        {items.map(({ component, key, title }) => {
          return (
            <Box display="inline-block" key={key}>
              {component(title, key === activeKey)}
            </Box>
          );
        })}
      </HStack>
    </>
  );
};

export default ListTabItem;
