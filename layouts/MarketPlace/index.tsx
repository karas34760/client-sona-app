import { useQuery } from '@apollo/client';
import { Box, Container, HStack, Heading } from '@chakra-ui/react';
import React from 'react';

import { SEARCH_TICKET_ON_SALE } from '@/graphql/query';
interface IProps {
  data: any; //Event Search Data
  address: string;
}
const MarketPlacePage = ({ data, address }: IProps) => {
  const { data: dataHolders, loading } = useQuery(SEARCH_TICKET_ON_SALE, {
    variables: {
      filter: {
        eventAddress: address,
      },
    },
  });
  console.log(dataHolders);
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
