import { Box } from '@chakra-ui/react';
import React from 'react';
interface IProps {
  image: string;
}
const BannerEventDetail = ({ image }: IProps) => {
  return (
    <Box width="full">
      <Box
        height={{ lg: '560px', base: '300px' }}
        width="full"
        bgImage={image}
        bgSize="cover"
        bgPosition="center"
        backgroundRepeat="no-repeat"
      />
    </Box>
  );
};

export default BannerEventDetail;
