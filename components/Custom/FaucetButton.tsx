import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  VStack,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Web3 from 'web3';

import LoadingVerify from '@/animations/Loading/LoadingVerify';
import { useAuth } from '@/hooks/useAuth';
import { setUserLoading } from '@/redux/user/user-slice';
import { usdToWei } from '@/utils/format/money';
import { CONTRACT_USDT_ABI, USDT_ADDRESS } from '@/utils/utils';

const FaucetButton = () => {
  const { user } = useAuth();
  const web3 = new Web3(window.ethereum);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const dispatch = useDispatch();
  const handleSend = async () => {
    setIsLoading(true);
    dispatch(setUserLoading(true));
    const contract = new web3.eth.Contract(
      JSON.parse(CONTRACT_USDT_ABI),
      USDT_ADDRESS
    );
    try {
      //todo remove
      const fixedAmountUSD = usdToWei(5000); // 5000$ fee
      await contract.methods.mint(user, fixedAmountUSD).send({
        from: user,
      });

      setIsLoading(false);
      dispatch(setUserLoading(false));
      toast({
        title: 'Faucet Success',
        description: 'Your Balance are updated ',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast({
        title: 'Faucet Error',
        description: `${error}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
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
