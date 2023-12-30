import { Box, Container, Skeleton, SkeletonText } from '@chakra-ui/react';
import React from 'react';

const HeroEventSkeleton = () => {
  return (
    <>
      <Container maxWidth="container.xl">
        <Box borderRadius="lg" overflow="hidden" boxShadow="lg">
          <Skeleton>
            <Box height={{ md: '500px', base: '300px' }} position="relative">
              <SkeletonText />
            </Box>
          </Skeleton>
        </Box>
      </Container>
    </>
  );
};

export default HeroEventSkeleton;
