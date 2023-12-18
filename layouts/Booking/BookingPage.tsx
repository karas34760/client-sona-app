import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import { useAuth } from '@/hooks/useAuth';
interface UserChoicesInterface {
  [key: number]: { amount: number; price: number };
}
const BookingPage = () => {
  const { user } = useAuth();
  const ListExample = [
    {
      tier: 1,
      amount: 400,
      price: 200,
      name: 'Tier 1',
    },
    {
      tier: 2,
      amount: 400,
      price: 100,
      name: 'Tier 2',
    },
    {
      tier: 3,
      amount: 400,
      price: 2500,
      name: 'Tier 3',
    },
  ];
  const [userChoices, setUserChoices] = useState<UserChoicesInterface>({});

  const handleAmountChange = (tier: number, amount: number) => {
    setUserChoices((prevChoices: any) => ({
      ...prevChoices,
      [tier]: {
        amount,
        price: ListExample.find(item => item.tier === tier)?.price,
      },
    }));
  };
  const computeTotalAmount = () => {
    return Object.values(userChoices).reduce(
      (total, { amount, price }) => total + amount * price,
      0
    );
  };
  console.log('Current User Choice', userChoices);
  return (
    <>
      <Container py={8} maxWidth="container.xl">
        <Grid
          gridTemplateColumns={{
            lg: '60% 40%',
            md: '1fr 1fr',
          }}
          gap={10}
        >
          <Box>
            <Grid
              gridTemplateColumns={'1fr 1fr 1fr'}
              textTransform="capitalize"
              py={4}
              mb={6}
              fontWeight="bold"
              borderBottom="0.063rem solid"
              borderBottomColor="primary.gray.500"
            >
              <Text>ticket type</Text>
              <Text>Unit Price </Text>
              <Text>Quantity</Text>
            </Grid>
            <Grid
              rowGap={4}
              gridTemplateColumns={'1fr 1fr 1fr'}
              textTransform="capitalize"
            >
              {ListExample.map(item => (
                <>
                  <Text>{item.name}</Text>
                  <Text>{item.price}</Text>
                  <NumberInput
                    size="lg"
                    maxW={32}
                    onChange={(e: any) =>
                      handleAmountChange(item.tier, parseInt(e))
                    }
                    defaultValue={userChoices[item?.tier]?.amount || 0}
                    max={10}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </>
              ))}
            </Grid>
          </Box>
          <Box>
            <Flex flexDir="column" gap={8}>
              <Box
                bg="white"
                boxShadow="shadow.200"
                border="0.063rem solid "
                borderColor="primary.gray.300"
              >
                <Flex flexDir="column" padding={6} gap={6}>
                  <Text fontSize="lg" fontWeight="bold">
                    Ticket Receiver
                  </Text>
                  <Text>Receiver: ${user}</Text>
                  <Text>Email: ${user}</Text>
                  <Box>
                    <Text fontSize="lg" fontWeight="bold">
                      Booking Info
                    </Text>
                    <HStack justifyContent="space-between" fontWeight="bold">
                      <Text>Ticket Type</Text>
                      <Text>Quantity</Text>
                    </HStack>
                    {Object.entries(userChoices).map(
                      ([tier, { amount, price }]) => (
                        <li key={tier}>
                          Tier {tier}: Amount: {amount}, Price: {price}
                        </li>
                      )
                    )}
                  </Box>
                </Flex>
                <HStack
                  bg="primary.gray.400"
                  justifyContent="space-between"
                  py={6}
                  fontWeight="bold"
                  px={6}
                >
                  <Text>Total</Text>
                  <Text> {computeTotalAmount()}$</Text>
                </HStack>
              </Box>
              <Button cursor="pointer" variant="primary">
                Purchase
              </Button>
            </Flex>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default BookingPage;
