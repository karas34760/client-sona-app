import {
  Box,
  Button,
  Center,
  Container,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import BGLearn from '@/public/assets/images/bg_learn.png';
const LearnUse = () => {
  const bg = useColorModeValue('dark.200', 'transparent');
  return (
    <Box bg={bg}>
      <Box
        bgImage={BGLearn.src}
        bgPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Container maxWidth="container.md">
          <Center
            flexDir="column"
            mb={6}
            height="840px"
            textAlign="center"
            gap={6}
          >
            <Text variant="type_title">FAQ Learn</Text>
            <Text fontSize={{ lg: '48px' }} color="white">
              Learn how to create great Events at our website
            </Text>
            <Text fontSize="20px" color="#EFEDFDB2">
              Work Well Developer In the clearly way How to using our product.
            </Text>
            <Link href="/faq">
              <Button variant="gradient_1" color="white">
                Learn Use Tickifi
              </Button>
            </Link>
          </Center>
        </Container>
      </Box>
    </Box>
  );
};

export default LearnUse;
