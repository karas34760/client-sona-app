import {
  Box,
  useColorModeValue,
  Text,
  Container,
  HStack,
  Button,
  Flex,
} from '@chakra-ui/react';
import React from 'react';

import Image from 'next/image';
const HeroSection = () => {
  const bg = useColorModeValue(
    'gradient.300',
    'transparent'
  ); /* linear-gradient(184deg, #0C0C0C 40%, #6F4FF2 100%) */
  return (
    <Box py={16} bg={bg}>
      <Container maxWidth="container.xl">
        <HStack
          justifyContent="space-between"
          flexWrap={{ md: 'nowrap', base: 'wrap-reverse' }}
          rowGap={6}
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
          <Box
            width={{ lg: '43.75rem', md: '31.25rem', base: 'full' }}
            position="relative"
            height={{ lg: '40.625rem', md: '25rem', base: '18.75rem' }}
          >
            <Image
              style={{
                transformStyle: 'preserve-3d',
                transform:
                  'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              }}
              src={`assets/bg/bg-hero.svg`}
              priority
              fill
              /*  width="700"
              height="760" */
              alt="Hero Image"
            />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default HeroSection;
