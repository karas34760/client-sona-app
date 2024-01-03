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
  Tooltip,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import Web3 from 'web3';

import { client } from '@/graphql/httplink';
import { SUBMIT_TRANSACTION } from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import { setUserLoading } from '@/redux/user/user-slice';
import { CONTRACT_TICKIFI_ABI, TICKIFI_ADDRESS } from '@/utils/utils';
import RefundIcon from 'public/assets/icons/generals/refund.svg';
interface IProps {
  eventAddress: string;
  tier: number;
  amount: number;
  short?: boolean;
}
const RefundTicketMoney = ({
  eventAddress,
  tier,
  amount,
  short = false,
}: IProps) => {
  const web3 = new Web3(window.ethereum);
  const toast = useToast({
    position: 'top-right',
    duration: 3000,
    isClosable: true,
  });
  const { user } = useAuth();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();
  return (
    <>
      {short ? (
        <>
          <Tooltip placement="top" label="Refund Tickets">
            <IconButton
              onClick={onOpen}
              variant="primary"
              icon={<Icon as={RefundIcon} height={5} width={5} />}
              aria-label="Refund"
            />
          </Tooltip>
        </>
      ) : (
        <Button
          variant="primary"
          onClick={onOpen}
          leftIcon={<Icon as={RefundIcon} height={5} width={5} />}
        >
          Refund
        </Button>
      )}

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
                        dispatch(setUserLoading(true));
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
                        dispatch(setUserLoading(false));
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
