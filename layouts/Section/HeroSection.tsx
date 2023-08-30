import { Box, useColorModeValue, Text, Container } from '@chakra-ui/react';
import React from 'react';

const HeroSection = () => {
  const bg = useColorModeValue(
    'gradient.300',
    'linear-gradient(214deg, #000 0%, #6F4FF2 100%);'
  );
  return (
    <Box py={16} height="500px">
      <Container maxWidth="container.xl">
        <Box fontSize="64px" color="white" fontWeight="800">
          <Text>NFTs - New,</Text>
          <Text
            /*  bg="linear-gradient(162deg, #8D1CFE 0%, #0038ED 100%)" */
            sx={{
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            position="relative"
            bg="linear-gradient(to right,#cc00ff,#cc00ff 50%,#ddd 50%)"
            bgSize="200% 100%"
            backgroundPosition="-100%"
            transition=".5s ease-in-out"
            _hover={{
              color: 'primary.purple.400',
              backgroundPosition: '0',
              _after: {
                width: '100%',
                opacity: 1,
                left: 0,
              },
            }}
            _after={{
              content: "''",
              height: '0.125rem',
              width: 0,
              backgroundColor: 'primary.purple.400',
              position: 'absolute',
              bottom: '-0.125rem',
              right: 0,
              opacity: 0,
              transition: '.5s',
            }}
          >
            NFTs -New Faier
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
