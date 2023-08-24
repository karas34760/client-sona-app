import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const SubcribeEmail = () => {
  return (
    <Container
      maxWidth="container.xl"
      boxShadow="0px 4px 8px 0px rgba(134, 106, 250, 0.40)"
      borderRadius="24px"
      height="418px"
    >
      <HStack py="64px" px="180px" gap="32px">
        <Image
          borderRadius="16px"
          src="assets/images/sub.png"
          objectFit="cover"
          height="282px"
          width="325px"
        />

        <Flex flexDirection="column" gap="10px">
          <Text fontSize="42px" color="primary.purple.500" fontWeight="bold">
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

            <Button borderLeftRadius={0} px={6}>
              Get Email
            </Button>
          </HStack>
        </Flex>
      </HStack>
    </Container>
  );
};

export default SubcribeEmail;
