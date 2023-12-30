import { Box, Flex, HStack, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const CardOneSkeleton = () => {
  return (
    <HStack
      height="100%"
      flexDirection="column"
      gap={0}
      overflow="hidden"
      transition="box-shadow 0.25s ease-in-out 0s, transform 0.25s ease 0s"
    >
      <Skeleton borderRadius="xl">
        <Box height="240px" width="full" minW="240px" borderRadius="xl" />
      </Skeleton>
      <Flex flexDirection="column" width="full" padding={4} gap={2}>
        <SkeletonText mt="4" noOfLines={3} spacing="4" skeletonHeight="6" />
      </Flex>
    </HStack>
  );
};

export default CardOneSkeleton;
