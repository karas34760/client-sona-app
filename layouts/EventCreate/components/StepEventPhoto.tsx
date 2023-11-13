import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import React from 'react';

import PlusIcon from '@/public/assets/icons/arrow/plus.svg';
import InfoIcon from '@/public/assets/icons/generals/info.svg';
const StepEventPhoto = () => {
  return (
    <VStack gap={8} width="full">
      <Box
        bg="primary.gray.200"
        py={12}
        mx="auto"
        width="full"
        textAlign="center"
      >
        <Icon
          as={PlusIcon}
          height={16}
          width={16}
          cursor="pointer"
          _hover={{
            opacity: 0.7,
          }}
          color="primary.purple.400"
        />
        <HStack width="full" justifyContent="center">
          <Icon as={InfoIcon} />
          <Text fontWeight="bold">Cover Image for Laptop View</Text>
        </HStack>

        <Text fontSize="sm" color="primary.gray.500">
          Recommended: 1920px X 1080px
        </Text>
      </Box>
      <Box
        bg="primary.gray.200"
        py={12}
        mx="auto"
        width="80%"
        textAlign="center"
      >
        <Icon
          as={PlusIcon}
          height={16}
          width={16}
          cursor="pointer"
          _hover={{
            opacity: 0.7,
          }}
          color="primary.purple.400"
        />
        <HStack width="full" justifyContent="center">
          <Icon as={InfoIcon} />
          <Text fontWeight="bold">Cover Image for Mobile View</Text>
        </HStack>

        <Text fontSize="sm" color="primary.gray.500">
          Recommended: 1920px X 1080px
        </Text>
      </Box>
    </VStack>
  );
};

export default StepEventPhoto;
