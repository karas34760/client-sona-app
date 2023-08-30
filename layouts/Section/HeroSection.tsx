import {
  Box,
  useColorModeValue,
  Text,
  Container,
  HStack,
  Image,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const HeroSection = () => {
  const bg = useColorModeValue(
    'gradient.300',
    'linear-gradient(214deg, #000 0%, #6F4FF2 100%);'
  );
  return (
    <Box py={16} bg={bg}>
      <Container maxWidth="container.xl">
        <HStack>
          <Box fontSize="64px" color="white" fontWeight="800">
            <Text>NFTs - New,</Text>
            <Text>NFTs -New Faier</Text>
            <Button>Expore</Button>
            <Button>Buy Ticket</Button>
          </Box>
          <Box>
            <Image
              src="https://demo.ovatheme.com/cryptlight/wp-content/uploads/2021/08/ilus-bner.png"
              height="561px"
            />
          </Box>
        </HStack>
        {/*  <Image
          src="https://demo.ovatheme.com/cryptlight/wp-content/uploads/2021/08/ilustrator.png"
          width="600px"
        /> */}
      </Container>
    </Box>
  );
};

export default HeroSection;
