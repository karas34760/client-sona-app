import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  HStack,
  Heading,
  Icon,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Web3 from 'web3';

import { client } from '@/graphql/httplink';
import { SUBMIT_TRANSACTION } from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import { TicketMetaResult } from '@/utils/constants/constants';
import { usdToWei, weiToUSD } from '@/utils/format/money';
import {
  BALANCE_ADDRESS,
  CONTRACT_TICKIFI_ABI,
  CONTRACT_USDT_ABI,
  TICKIFI_ADDRESS,
  USDT_ADDRESS,
} from '@/utils/utils';
import BuyIcon from 'public/assets/icons/generals/buy.svg';
interface UserChoicesInterface {
  [key: number]: { amount: number; price: number };
}
interface IProps {
  data: any;
  eventAddress: string;
}
const BookingPage = ({ data, eventAddress }: IProps) => {
  const toast = useToast({
    position: 'top-right',
    duration: 3000,
    isClosable: true,
  });
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userChoices, setUserChoices] = useState<UserChoicesInterface>({});

  const web3 = new Web3(window.ethereum);
  const handleAmountChange = (tier: number, amount: number) => {
    setUserChoices((prevChoices: any) => ({
      ...prevChoices,
      [tier]: {
        amount,
        price: data.tickets.find((item: TicketMetaResult) => item.tier === tier)
          ?.price,
      },
    }));
  };
  const computeTotalAmount = () => {
    return Object.values(userChoices).reduce(
      (total, { amount, price }) => total + amount * price,
      0
    );
  };

  return (
    <>
      <Container py={8} maxWidth="container.xl">
        <Heading textAlign="center" mb={14}>
          Booking Reservation
        </Heading>
        <Grid
          gridTemplateColumns={{
            lg: '60% 40%',
            md: '1fr 1fr',
          }}
          gap={10}
        >
          <Box>
            <Grid
              gridTemplateColumns={'1fr 1fr 1fr 1fr'}
              textTransform="capitalize"
              py={4}
              mb={6}
              fontWeight="bold"
              borderBottom="0.063rem solid"
              borderBottomColor="primary.gray.500"
            >
              <Text>ticket type</Text>
              <Text>Unit Price </Text>
              <Text>Remaining</Text>
              <Text>Quantity (max :10)</Text>
            </Grid>
            <Grid
              rowGap={4}
              gridTemplateColumns={'1fr 1fr 1fr 1fr'}
              textTransform="capitalize"
            >
              {data.tickets.map((item: TicketMetaResult) => (
                <>
                  <Text fontWeight="bold">{item.name}</Text>
                  <Text>${item.price}</Text>
                  <Text>{item.remaining}</Text>
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
                  <Text>${computeTotalAmount()}</Text>
                </HStack>
              </Box>

              <Button
                cursor="pointer"
                variant="primary"
                onClick={onOpen}
                isDisabled={computeTotalAmount() == 0}
              >
                {computeTotalAmount() == 0
                  ? 'Choose Tickets to Purchase'
                  : 'Purchase Tickets'}
              </Button>
            </Flex>
          </Box>
        </Grid>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent padding={8}>
          <ModalCloseButton />
          <Center flexDir="column" gap={4}>
            <Icon as={BuyIcon} color="green.400" height="200px" width="200px" />
            <Text>Pay For Reservation :</Text>
            <Text fontWeight="bold">Total : ${computeTotalAmount()}</Text>
          </Center>

          <ModalFooter gap={6} justifyContent="space-between">
            <Button
              variant="primary"
              onClick={() => {
                const handleBuyTicket = new Promise(async (resolve, reject) => {
                  try {
                    if (user) {
                      const payPrice = computeTotalAmount();
                      const contract = new web3.eth.Contract(
                        JSON.parse(CONTRACT_USDT_ABI),
                        USDT_ADDRESS
                      );
                      const fixedAmountUSD = usdToWei(payPrice + 2);
                      const balanceAllow = await contract.methods
                        .allowance(user, BALANCE_ADDRESS)
                        .call();
                      const balanceAllowUSDT = parseFloat(
                        weiToUSD(balanceAllow, 1)
                      );

                      // Check balance allow is enough or not
                      if (balanceAllowUSDT < payPrice + 2) {
                        const receipt = await contract.methods
                          .approve(BALANCE_ADDRESS, fixedAmountUSD)
                          .send({
                            from: user,
                          });
                        console.log(receipt);
                      }
                      const contract_tickfi = new web3.eth.Contract(
                        JSON.parse(CONTRACT_TICKIFI_ABI),
                        TICKIFI_ADDRESS
                      );
                      // get txHash
                      const txHash = await contract_tickfi.methods
                        .buyTickets(
                          eventAddress,
                          Object.keys(userChoices).map(key => key),
                          Object.values(userChoices).map(
                            choice => choice.amount
                          )
                        )
                        .send({
                          from: user,
                        });

                      const res_signed = await client.mutate({
                        mutation: SUBMIT_TRANSACTION,
                        variables: {
                          blockHash: txHash.blockHash,
                          blockNumber: txHash.blockNumber,
                          transactionHash: txHash.transactionHash,
                          from: txHash.from,
                        },
                      });
                      console.log('Signed Booking', res_signed);
                      resolve(res_signed);
                    }
                  } catch (error) {
                    reject(error);
                  }
                });
                toast.promise(handleBuyTicket, {
                  success: {
                    title: 'Payment Resolver',
                    description: 'Buy Success!',
                  },
                  error: {
                    title: 'Payment rejected',
                    description: 'Something wrong!',
                  },
                  loading: {
                    title: 'Payment pending',
                    description: 'Please wait processing...',
                  },
                });
                onClose();
              }}
              flex={1}
            >
              Confirm Buy
            </Button>

            <Button colorScheme="red" mr={3} onClick={onClose} paddingX={8}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BookingPage;
