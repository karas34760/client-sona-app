import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  VStack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Web3 from 'web3';

import LoadingVerify from '@/animations/Loading/LoadingVerify';
import { useAuth } from '@/hooks/useAuth';
import { usdToWei } from '@/utils/format/money';
import { CONTRACT_USDT_ABI, TARGET_ADDRESS, USDT_ADDRESS } from '@/utils/utils';
// Send money to create event
interface IProp {
  // eslint-disable-next-line no-unused-vars
  setTxHash: (hash: string) => void;
}
const SendMoneyContract = ({ setTxHash }: IProp) => {
  const { user } = useAuth();
  const web3 = new Web3(window.ethereum);
  const [isLoading, setIsLoading] = useState(false);
  const handleSend = async () => {
    setIsLoading(true);

    const contract = new web3.eth.Contract(
      JSON.parse(CONTRACT_USDT_ABI),
      USDT_ADDRESS
    );
    try {
      //todo remove
      const fixedAmountUSD = usdToWei(5000); // 5000$ fee
      const receipt = await contract.methods
        .transfer(TARGET_ADDRESS, fixedAmountUSD)
        .send({
          from: user,
        });

      setTxHash(receipt.transactionHash);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleSend}>
        Pay to Event
      </Button>
      <Modal isOpen={isLoading} onClose={() => {}}>
        <ModalOverlay />
        <ModalContent margin="auto">
          <VStack padding={6}>
            <LoadingVerify />
            <Text>Your Payment are Verify in blockchain...</Text>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SendMoneyContract;
