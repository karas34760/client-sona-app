import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import BNBIcon from 'public/assets/icons/crypto/BNB.svg';
import EtherIcon from 'public/assets/icons/crypto/ETH.svg';
import BTCIcon from 'public/assets/icons/crypto/BTC.svg';

const SubcribeEmail = () => {
  return (
    <Container maxWidth="container.xl">
      <Box
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
          <Flex flexDirection="column" gap={2.5} px={4}>
            <Text
              fontSize="1.75rem"
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
          <Box
            position="relative"
            right={0}
            display={{ md: 'inherit', base: 'none' }}
          >
            <Icon
              as={BNBIcon}
              position="absolute"
              height={{ lg: '9.625rem', md: '4rem' }}
              width={{ lg: '9.625rem', md: '4rem' }}
              transform={{
                md: 'translate(150%,-30%)',
                lg: 'translate(30%,-30%)',
              }}
            />
            <Icon
              as={BTCIcon}
              position="absolute"
              height="12.188rem"
              width="12.188rem"
              transform={{
                lg: 'translate(-20%,-120%)',
                md: 'translate(-40%,-100%)',
              }}
            />
            <Icon
              as={EtherIcon}
              position="absolute"
              height="6rem"
              width="6rem"
              transform="translate(80%,100%)"
            />
          </Box>
        </Center>
      </Box>
    </Container>
  );
};

export default SubcribeEmail;
