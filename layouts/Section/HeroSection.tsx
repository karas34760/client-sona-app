import {
  Box,
  useColorModeValue,
  Text,
  Container,
  HStack,
  Button,
  Icon,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import TicketTwin from 'public/assets/icons/art/digital_twin.svg';
const HeroSection = () => {
  const bg = useColorModeValue(
    'gradient.300',
    'linear-gradient(214deg, #0C0C0C 40%, #6F4FF2 100%);'
  );
  return (
    <Box py={16} bg={bg}>
      <Container maxWidth="container.xl">
        <HStack
          justifyContent="space-between"
          flexWrap={{ md: 'nowrap', base: 'wrap' }}
        >
          <Flex color="white" flexDirection="column" gap={6}>
            <Box>
              <Text variant="type_title" color="white">
                NFTs - New,
              </Text>
              <Text variant="type_title">Fairer Ticking Concert</Text>
            </Box>

            <Text maxWidth="400px">
              An NFT event ticketing marketplace helping artists foster closer
              connections with fans, eliminating fraud and reducing the impact
              of scalping.
            </Text>
            <Flex gap={6}>
              <Button variant="primary">Expore Now</Button>
              <Button variant="solid">Buy Ticket</Button>
            </Flex>
          </Flex>
          <Box>
            <Icon as={TicketTwin} height="full" width="full" />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default HeroSection;
