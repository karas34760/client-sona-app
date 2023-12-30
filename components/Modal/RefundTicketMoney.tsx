import {
  Button,
  Icon,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  useToast,
  Text,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import React from 'react';
import Web3 from 'web3';

import { client } from '@/graphql/httplink';
import { SUBMIT_TRANSACTION } from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import { CONTRACT_TICKIFI_ABI, TICKIFI_ADDRESS } from '@/utils/utils';
import RefundIcon from 'public/assets/icons/generals/refund.svg';
interface IProps {
  eventAddress: string;
  tier: number;
  amount: number;
}
const RefundTicketMoney = ({ eventAddress, tier, amount }: IProps) => {
  const web3 = new Web3(window.ethereum);
  const toast = useToast({
    position: 'top-right',
    duration: 3000,
    isClosable: true,
  });
  const { user } = useAuth();
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button
        variant="primary"
        onClick={onOpen}
        leftIcon={<Icon as={RefundIcon} height={5} width={5} />}
      >
        Refund
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Text>
              If you want to refund ticket , the money will refund with base on
              a define %
            </Text>
          </ModalBody>
          <ModalFooter gap={6}>
            <Button
              onClick={() => {
                const handleRefundTicket = new Promise(
                  async (resolve, reject) => {
                    try {
                      if (user) {
                        const contract_tickifi = new web3.eth.Contract(
                          JSON.parse(CONTRACT_TICKIFI_ABI),
                          TICKIFI_ADDRESS
                        );
                        const txHash = await contract_tickifi.methods
                          .refundTickets(eventAddress, [tier], [amount])
                          .send({
                            from: user,
                            estimateGas: 1,
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

                        resolve(res_signed);
                      }
                    } catch (error) {
                      reject(error);
                    } finally {
                      onClose();
                    }
                  }
                );

                toast.promise(handleRefundTicket, {
                  success: {
                    title: 'Refund Ticket Success',
                    description: 'Let Continous!',
                  },
                  error: {
                    title: 'Refund Ticket rejected',
                    description: 'Something wrong!',
                  },
                  loading: {
                    title: 'Refund Ticket pending',
                    description: 'Please wait to finish refund ticket',
                  },
                });
              }}
            >
              Confrim to Refund
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RefundTicketMoney;
