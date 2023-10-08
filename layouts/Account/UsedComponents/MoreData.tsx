import {
  HStack,
  Icon,
  Popover,
  PopoverContent,
  Text,
  PopoverTrigger,
  Box,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import ReportModal from './ReportModal';

import ChakraBox from '@/components/Custom/ChakraBox';
import MoreIcon from 'public/assets/icons/generals/more.svg';
import SettingIcon from 'public/assets/icons/generals/setting.svg';

// More Setting to Account
const MoreData = () => {
  return (
    <>
      <Popover variant="primary" placement="bottom-start">
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
        >
          <Link href="/setting/" target="_blank">
            <HStack
              gap={3}
              padding={4}
              cursor="pointer"
              borderRadius="xl"
              _hover={{
                bg: 'primary.gray.300',
              }}
            >
              <Icon as={SettingIcon} height={6} width={6} />
              <Text fontSize="sm">Settings</Text>
            </HStack>
          </Link>
          <Box
            padding={4}
            cursor="pointer"
            borderRadius="xl"
            _hover={{
              bg: 'primary.gray.300',
            }}
          >
            <ReportModal />
          </Box>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default MoreData;
