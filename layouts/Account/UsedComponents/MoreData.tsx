import {
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import React from 'react';

import ReportModal from './ReportModal';

import ChakraBox from '@/components/Custom/ChakraBox';
import MoreIcon from 'public/assets/icons/generals/more.svg';

// More Setting to Account
const MoreData = () => {
  return (
    <>
      <Popover variant="primary" placement="bottom-start" autoFocus={false}>
        <PopoverTrigger>
          <ChakraBox>
            <Icon
              as={MoreIcon}
              aria-label="Tickifi More Icon"
              cursor="pointer"
            />
          </ChakraBox>
        </PopoverTrigger>
        <PopoverContent
          maxWidth="100%"
          width="fit-content"
          color="primary.gray.800"
          padding={0}
        >
          <ReportModal />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default MoreData;
