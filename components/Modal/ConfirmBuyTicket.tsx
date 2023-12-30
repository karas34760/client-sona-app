/* eslint-disable no-unused-vars */
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
  useDisclosure,
  Image,
  Text,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import Web3 from 'web3';

import { client } from '@/graphql/httplink';
import { SUBMIT_TRANSACTION } from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import { usdToWei, weiToUSD } from '@/utils/format/money';
import {
  BALANCE_ADDRESS,
  CONTRACT_MARKETPLACE_ABI,
  CONTRACT_USDT_ABI,
  MARKETPLACE_ADDRESS,
  USDT_ADDRESS,
} from '@/utils/utils';
import PurchaseOrderIcon from 'public/assets/icons/generals/purchase-order.svg';
interface IProps {
  eventAddress: string;
  tier: number;
  amount: number;
  price: number;
  seller: string;
  name: string;
  description: string;
  asset: string;
  signature: string;
  startTime: number;
  deadline: number;
}
const ConfirmBuyTicket = ({
  eventAddress,
  tier,
  amount,
  price,
  seller,
  name,
  description,
  asset,
  signature,
  startTime,
  deadline,
}: IProps) => {
  const web3 = new Web3(window.ethereum);
  const toast = useToast({
    position: 'top-right',
    duration: 3000,
    isClosable: true,
  });

  const { isOpen, onClose, onOpen } = useDisclosure();
  const { user } = useAuth();
  return (
    <>
      <Button
        variant="primary"
        onClick={onOpen}
        leftIcon={<Icon as={PurchaseOrderIcon} height={5} width={5} />}
      >
        Buy Ticket
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm to buy tickets</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" gap={5}>
            <Image src={asset} aria-label="Tickifi | Confirm Buy Image" />
            <Text>Name: {name}</Text>
            <Text>Tier: {tier}</Text>
            <Text>Description: {description}</Text>
          </ModalBody>

          <ModalFooter gap={4}>
            <Button
              onClick={async () => {
                const handleBuyticket = new Promise(async (resolve, reject) => {
                  try {
                    if (user) {
                      const contract = new web3.eth.Contract(
                        JSON.parse(CONTRACT_USDT_ABI),
                        USDT_ADDRESS
                      );
                      const fixedAmountUSD = usdToWei(price);
                      const balanceAllow = await contract.methods
                        .allowance(user, BALANCE_ADDRESS)
                        .call();
                      const balanceAllowUSDT = parseFloat(
                        weiToUSD(balanceAllow, 1)
                      );
                      if (balanceAllowUSDT < price) {
                        await contract.methods
                          .approve(BALANCE_ADDRESS, fixedAmountUSD)
                          .send({
                            from: user,
                          });
                      }
                      const contract_marketplace = new web3.eth.Contract(
                        JSON.parse(CONTRACT_MARKETPLACE_ABI),
                        MARKETPLACE_ADDRESS
                      );
                      const resBuy = await contract_marketplace.methods
                        .buyItem(
                          {
                            eventAddress,
                            tier,
                            amount,
                            price: web3.utils.toWei(price.toString(), 'ether'),
                            deadline: deadline / 1000,
                          },
                          signature,
                          seller
                        )
                        .send({
                          from: user,
                        });
                      const resSub = await client.mutate({
                        mutation: SUBMIT_TRANSACTION,
                        variables: {
                          blockHash: resBuy.blockHash,
                          blockNumber: resBuy.blockNumber,
                          transactionHash: resBuy.transactionHash,
                          from: resBuy.from,
                        },
                      });
                      onClose();
                      resolve(resSub);
                    }
                  } catch (error) {
                    console.log(error);
                    reject(error);
                  }
                });
                toast.promise(handleBuyticket, {
                  success: {
                    title: 'Payment Complete',
                    description: 'Buy Ticket Success!',
                  },
                  error: {
                    title: 'Payment rejected',
                    description: 'Something wrong!',
                  },
                  loading: {
                    title: 'Payment pending',
                    description: 'Please wait to finish',
                  },
                });
              }}
            >
              Confirm Payment
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

export default ConfirmBuyTicket;
