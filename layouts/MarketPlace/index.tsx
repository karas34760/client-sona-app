import {
  Box,
  Center,
  Container,
  HStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import React from 'react';
interface IProps {
  data: any; //Event Search Data
  address: string;
}
const MarketPlacePage = ({ data, address }: IProps) => {
  return (
    <Box width="full" height="full">
      <Box
        height={{ lg: '560px', base: '300px' }}
        width="full"
        bgImage={data.image}
        bgSize="cover"
        bgPosition="center"
        backgroundRepeat="no-repeat"
      />
      <Container maxWidth="container.lg" py={8}>
        <Heading fontSize="2rem" textAlign="center">
          Marketpalce for Event: {data.name}
        </Heading>
        <Box></Box>
        <HStack></HStack>
      </Container>
    </Box>
  );
};

export default MarketPlacePage;
