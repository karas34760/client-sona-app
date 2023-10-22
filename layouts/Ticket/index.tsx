import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  HStack,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import ActionTicket from './ActionTicket';
import TicketDetailTab from './TicketDetailTab';

import VerifIcon from 'public/assets/icons/generals/verify.svg';
const TicketDetailPage = () => {
  return (
    <>
      <Container maxW="container.xl" py={6}>
        <Grid gridTemplateColumns={{ md: '60% 40%', sm: '1fr 1fr' }} gap={10}>
          <Box>
            <Image
              src="/test/nft/nft_8.jpeg"
              height="500px"
              width="auto"
              alt=""
              borderRadius="xl"
            />
            <TicketDetailTab />
          </Box>
          <Box>
            <Flex flexDirection="column" gap={3} position="sticky" top="104px">
              <HStack cursor="pointer">
                <Image
                  height="24px"
                  width="24px"
                  src="/test/avatar/avatar_3.jpg"
                  objectFit="cover"
                  alt=""
                />

                <Text fontWeight="bold">NFTKing Club</Text>
                <Icon
                  as={VerifIcon}
                  height={5}
                  w={5}
                  color="secondary.info.200"
                />
              </HStack>

              <Text fontSize={{ md: '3xl', base: 'xl' }} fontWeight="bold">
                Ticket Multiple Banm Event
              </Text>
              <HStack gap={1}>
                <Text color="primary.gray.500" fontWeight="bold">
                  Royalties
                </Text>
                <Text
                  bg="yellow.400"
                  color="white"
                  textAlign="center"
                  px={2}
                  borderRadius="lg"
                >
                  5%
                </Text>
              </HStack>
              <HStack>
                <Text color="primary.gray.500" fontWeight="bold">
                  Status:
                </Text>
                <Text color="red" fontWeight="bold">
                  Invalid (Expired)
                </Text>
              </HStack>

              <Box
                borderTop="0.063rem solid"
                borderTopColor="primary.gray.300"
                py={6}
              >
                <ActionTicket />
              </Box>
              <Flex
                border="0.063rem solid"
                borderColor="primary.gray.300"
                padding={4}
                borderRadius="xl"
                flexDirection="column"
                gap={4}
              >
                <Box
                  bg="primary.gray.300"
                  padding={4}
                  borderRadius="xl"
                  fontWeight="bold"
                >
                  <Text color="primary.gray.600">Price</Text>
                  <Text fontSize="xl">100$</Text>
                </Box>
                <Text
                  fontWeight="bold"
                  textAlign="center"
                  color="primary.gray.500"
                >
                  Last Sale Price: 98$
                </Text>

                <Button variant="primary">Buy Now with 100$</Button>
                <Button variant="primary">Place a Bid</Button>

                <Text fontSize="sm" color="primary.gray.500">
                  Sale ends in 29 d 23 h 34 m 55 s{' '}
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default TicketDetailPage;
