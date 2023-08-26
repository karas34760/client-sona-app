import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const SubcribeEmail = () => {
  return (
    <Container
      maxWidth="container.xl"
      boxShadow="0px 4px 8px 0px rgba(134, 106, 250, 0.40)"
      borderRadius="3xl"
    >
      <Center
        py={12}
        px={{ lg: '11.25rem', md: 4 }}
        gap={8}
        flexWrap={{ md: 'nowrap', base: 'wrap' }}
      >
        <Image
          borderRadius="2xl"
          src="assets/images/sub.png"
          objectFit="cover"
          height="17.625rem"
          width="20.313rem"
        />

        <Flex flexDirection="column" gap={2.5}>
          <Text
            fontSize="2rem"
            color="primary.purple.500"
            fontWeight="extrabold"
          >
            Join our community
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus
            facilisi ultrices sed faucibus proin cum ut.Lorem ipsum dolor sit
            amet consectetur. Iaculis vestibulum purus facilisi ultrices sed
            faucibus proin cum ut.
          </Text>
          <HStack gap={0}>
            <Input placeholder="Your Email address" borderRightRadius={0} />

            <Button
              borderLeftRadius={0}
              px={6}
              bg="primary.purple.400"
              color="white"
              _hover={{}}
            >
              Get Email
            </Button>
          </HStack>
        </Flex>
      </Center>
    </Container>
  );
};

export default SubcribeEmail;
