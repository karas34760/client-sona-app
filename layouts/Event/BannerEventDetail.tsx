import { Box } from '@chakra-ui/react';
import React from 'react';

const BannerEventDetail = () => {
  const test_link = '/test/banner/music_festival/alan_walker_1.jpg';

  return (
    <Box width="full">
      <Box
        height={{ lg: '560px', base: '300px' }}
        width="full"
        bgImage={test_link}
        bgSize="cover"
        bgPosition="center"
        backgroundRepeat="no-repeat"
      />
    </Box>
  );
};

export default BannerEventDetail;
