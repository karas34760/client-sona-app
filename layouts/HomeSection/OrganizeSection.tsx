import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import TwinDigitalIcon from 'public/assets/icons/art/digital_twin.svg';
import OganizeIcon from 'public/assets/icons/art/organize-art.svg';
const OrganizeSection = () => {
  return (
    <Container maxWidth="container.xl">
      <HStack
        width="full"
        flexWrap={{ md: 'nowrap', base: 'wrap' }}
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Box>
          <Icon as={OganizeIcon} width="full" height="full" />
        </Box>

        <Flex maxWidth="500px" flexDir="column" gap={6}>
          <Text variant="type_title">For Oganization</Text>
          <Text>
            More visibility, greater control, traceable ownership.A
            next-generation event ticketing platform that lets you engage with
            your customers and provide a more immersive experience in ways never
            before possible. You make the rules.
          </Text>

          <Text>
            tickets act as an exclusive passport for fans by reimagining what it
            means to be part of a community. Web3 empowers ticket issuers to
            deliver engaging experiences and increase revenue, all the while
            driving loyalty and retention.
          </Text>
          <HStack>
            <Button>Create Events</Button>
            <Button>Contact Us</Button>
          </HStack>
        </Flex>
      </HStack>
    </Container>
  );
};

export default OrganizeSection;
