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

const FaucetButton = () => {
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
      await contract.methods.mint(user, fixedAmountUSD).send({
        from: user,
      });

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleSend}>
        Faucet
      </Button>
      <Modal isOpen={isLoading} onClose={() => {}}>
        <ModalOverlay />
        <ModalContent margin="auto">
          <VStack padding={6}>
            <LoadingVerify />
            <Text>Your are GET USDT NOW...</Text>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FaucetButton;
