import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const TicketDetailPage = () => {
  return (
    <>
      <Container maxW="container.xl" py={6}>
        <Flex gap={20}>
          <Box>
            <Image
              src="/test/nft/nft_8.jpeg"
              height="full"
              width="auto"
              alt=""
              borderRadius="xl"
            />
          </Box>
          <Box minWidth="500px">
            <Text>NFT King of Balad</Text>
            <Text>Organize Overkill Karas</Text>
            <Text>Royalties 5% </Text>
            <Text>Current Valid: Invalid (Expired)</Text>
            <HStack>
              <Text>Love</Text>
              <Text>Share</Text>
              <Text>Refresh</Text>
              <Text>More</Text>
            </HStack>
            <Box border="0.063rem solid">
              <Box bg="primary.gray.400">
                <Text>Price</Text>
                <Text>100$</Text>
              </Box>
              <Text>Last Sale Price: 98$</Text>
              <Button>Buy Now with 100$</Button>
              <Button>Place a Bid</Button>
              <Text>Sale ends in 29 d 23 h 34 m 55 s </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default TicketDetailPage;
