import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Image,
  useDisclosure,
  HStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box,
  Input,
  useToast,
} from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import React, { useState } from 'react';
import Web3 from 'web3';

import { client } from '@/graphql/httplink';
import {
  SEARCH_LISTING_TICKET_MESSAGE,
  SUBMIT_SIGNATURE,
} from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import { ListPeriod } from '@/utils/constants/constants';
import { CONTRACT_EVENT_ABI, MARKETPLACE_ADDRESS } from '@/utils/utils';
import SaleTicketIcon from 'public/assets/icons/generals/sale_ticket.svg';
interface IProps {
  eventAddress: string;
  amount: number;
  priceListing: number;
  asset: string;
  tier: number;
}
const OnSaleMyTicket = ({
  eventAddress,
  amount,
  priceListing,
  asset,
  tier,
}: IProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [currentAmount, setCurrentAmount] = useState(1);
  const [currentPeriod, setCurrentPeriod] = useState(ListPeriod[0]);
  const [currentPrice, setCurrentPrice] = useState(0);
  const handleChange = (value: any) => setCurrentAmount(parseInt(value));
  const { user } = useAuth();
  const handleChangePeriod = (e: any) => setCurrentPeriod(e);
  const web3 = new Web3(window.ethereum);
  const toast = useToast({
    position: 'top-right',
    duration: 3000,
    isClosable: true,
  });
  return (
    <>
      <Button
        variant="primary"
        onClick={onOpen}
        leftIcon={<Icon as={SaleTicketIcon} height={5} width={5} />}
      >
        Sale
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enable Sale Your Tickets on Marketplace</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" gap={5}>
            <Image src={asset} />

            <HStack gap={4} justifyContent="space-between">
              <Box mb={2}>
                <Text>Number your Tickets: </Text>
                <Text fontSize="lg" fontWeight="bold">
                  {amount}
                </Text>
              </Box>
              <Box>
                <Text mb={2} fontWeight="bold">
                  Price Listing:
                </Text>
                <Text fontWeight="bold">${priceListing}</Text>
              </Box>
            </HStack>
            <HStack
              gap={6}
              alignItems="flex-start"
              justifyContent="space-between"
            >
              <Box flex={1}>
                <Text mb={2} fontWeight="bold">
                  Sale Times:
                </Text>

                <Select
                  name="period"
                  value={currentPeriod}
                  options={ListPeriod}
                  onChange={handleChangePeriod}
                />
              </Box>
              <Box>
                <Text mb={2} fontWeight="bold">
                  Amount Sale:
                </Text>
                <NumberInput
                  size="lg"
                  maxW={32}
                  defaultValue={currentAmount}
                  onChange={handleChange}
                  max={amount}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Box>
            </HStack>

            <Box>
              <Text mb={2}>Price/ 1 Ticket ($):</Text>
              <Input
                type="number"
                value={currentPrice}
                onChange={(e: any) => setCurrentPrice(parseInt(e.target.value))}
              />
            </Box>
            <HStack
              bg="primary.gray.400"
              justifyContent="space-between"
              py={6}
              fontWeight="bold"
              px={6}
            >
              <Text>Total</Text>
              <Text>${currentAmount * currentPrice}</Text>
            </HStack>
          </ModalBody>

          <ModalFooter gap={4}>
            <Button
              isDisabled={!currentPrice || !currentAmount}
              variant="primary"
              flex={1}
              onClick={() => {
                const handleSaleTicket = new Promise(
                  async (resolve, reject) => {
                    try {
                      if (user) {
                        const contract = new web3.eth.Contract(
                          CONTRACT_EVENT_ABI,
                          eventAddress
                        );
                        const checkApprove = await contract.methods
                          .isApprovedForAll(user, MARKETPLACE_ADDRESS)
                          .call();

                        if (!checkApprove) {
                          await contract.methods
                            .setApprovalForAll(MARKETPLACE_ADDRESS, true)
                            .send({
                              from: user,
                            });
                        }
                        const message_rsp = await client.query({
                          query: SEARCH_LISTING_TICKET_MESSAGE,
                          variables: {
                            eventAddress: eventAddress,
                            tier: tier,
                            amount: currentAmount,
                            period: currentPeriod.value,
                            price: currentAmount * currentPrice,
                          },
                        });
                        const signature = await web3.eth.personal.sign(
                          message_rsp.data.searchListingTicketsMessage.message,
                          user,
                          ''
                        );

                        const res = await client.mutate({
                          mutation: SUBMIT_SIGNATURE,
                          variables: {
                            filter: {
                              amount:
                                message_rsp.data.searchListingTicketsMessage
                                  .amount,
                              deadline:
                                message_rsp.data.searchListingTicketsMessage
                                  .deadline,
                              eventAddress:
                                message_rsp.data.searchListingTicketsMessage
                                  .eventAddress,
                              price:
                                message_rsp.data.searchListingTicketsMessage
                                  .price,
                              signature: signature,
                              signer: user,
                              startTime:
                                message_rsp.data.searchListingTicketsMessage
                                  .startTime,
                              status: 'Sale',
                              tier: message_rsp.data.searchListingTicketsMessage
                                .tier,
                            },
                          },
                        });
                        resolve(res);
                      }
                    } catch (error) {
                      reject(error);
                    } finally {
                      onClose();
                    }
                  }
                );
                toast.promise(handleSaleTicket, {
                  success: {
                    title: 'Payment Resolver',
                    description: 'Let Continous!',
                  },
                  error: {
                    title: 'Payment rejected',
                    description: 'Something wrong!',
                  },
                  loading: {
                    title: 'Payment pending',
                    description: 'Please wait',
                  },
                });
              }}
            >
              Sale My Ticket
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OnSaleMyTicket;
