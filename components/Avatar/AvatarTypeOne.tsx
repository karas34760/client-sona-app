import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import React from 'react';
interface IProps {
  link: string;
  alt?: string;
}
const AvatarTypeOne = ({ link, alt }: IProps) => {
  return (
    <Box
      borderRadius="xl"
      border="0.063rem solid"
      borderColor="primary.gray.50"
      height={{
        lg: '64px',
        base: '48px',
      }}
      width={{
        lg: '64px',
        base: '48px',
      }}
      overflow="hidden"
    >
      <Image
        src={link}
        alt={alt || ''}
        minWidth="full"
        minH="full"
        objectFit="cover"
      />
    </Box>
  );
};

export default AvatarTypeOne;
