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
import { CONTRACT_ABI } from '@/utils/utils';
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
    const contractAddress = '0x4A90D5aE01F03B650cdc8D3A94358F364D98d096';
    const contract = new web3.eth.Contract(
      JSON.parse(CONTRACT_ABI),
      contractAddress
    );
    try {
      //todo remove
      const fixedAmountUSD = usdToWei(5000); // 5000$ fee
      const receipt = await contract.methods
        .mint(contractAddress, fixedAmountUSD)
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
