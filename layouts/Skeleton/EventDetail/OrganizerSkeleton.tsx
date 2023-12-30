import { Box, Flex, HStack, Skeleton, Text } from '@chakra-ui/react';
import React from 'react';

import VerifySymbol from '@/components/Logo/VerifyIcon';

const OrganizerSkeleton = () => {
  return (
    <Box>
      <HStack gap={10}>
        <Skeleton>
          <Box
            borderRadius="xl"
            overflow="hidden"
            height="150px"
            width="150px"
          />
        </Skeleton>

        <Box>
          <Flex alignItems="center" gap={2}>
            <Skeleton>
              <Text fontSize="xl" fontWeight="bold">
                Midnight Society Founders Access Pass
              </Text>
            </Skeleton>

            <VerifySymbol />
          </Flex>
          <Skeleton>
            <Text textOverflow="clip" mt={2} noOfLines={2}>
              This limited series of Midnight Society Access Passes grants the
              holder studio-specific perks including but not limited to: a
              voting rights on game features....
            </Text>
          </Skeleton>
        </Box>
      </HStack>
    </Box>
  );
};

export default OrganizerSkeleton;
