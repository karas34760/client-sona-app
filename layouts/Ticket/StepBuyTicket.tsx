import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Step,
  Text,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
  useSteps,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Web3 from 'web3';

import { client } from '@/graphql/httplink';
import { CREATE_BUY_TICKET, SUBMIT_SIGNED_TRANSACTION } from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import { usdToWei } from '@/utils/format/money';
import {
  BALANCE_ADDRESS,
  CONTRACT_ABI,
  CONTRACT_ADDRESS,
  TARGET_ADDRESS,
} from '@/utils/utils';
interface IProps {
  isOpen: boolean;
  onClose: () => void;
  eventAddress: string;
  tier: number;
  amount: number;
  payPrice: number;
}
const StepBuyTicket = ({
  isOpen,
  onClose,
  eventAddress,
  tier,
  amount,
  payPrice,
}: IProps) => {
  const steps = [
    {
      title: 'Approve',
      description: `Approve Buy Ticket with your amount $${payPrice}`,
    },
    { title: 'Verify', description: 'We will verify your action' },
    { title: 'Complete', description: 'Buy Success' },
  ];
  const { activeStep, goToNext } = useSteps({
    index: 1,
    count: steps.length,
  });
  const { user } = useAuth();
  const web3 = new Web3(window.ethereum);
  const [loading, setLoading] = useState(false);
  const handleBuyTicket = async () => {
    setLoading(true);
    if (user) {
      const contract = new web3.eth.Contract(
        JSON.parse(CONTRACT_ABI),
        CONTRACT_ADDRESS
      );
      const fixedAmountUSD = usdToWei(payPrice + 2);
      const balanceAllow = await contract.methods
        .allowance(user, BALANCE_ADDRESS)
        .call();

      if (balanceAllow > fixedAmountUSD) {
        try {
          const receipt = await contract.methods
            .approve(BALANCE_ADDRESS, fixedAmountUSD)
            .send({
              from: user,
            });
          console.log(receipt);
        } catch (error) {
          setLoading(false);
          onClose();
        }
      }

      const res = await client.mutate({
        mutation: CREATE_BUY_TICKET,
        variables: {
          eventAddress: eventAddress,
          tiers: tier,
          amounts: amount,
        },
      });
      const gasPrice = await web3.eth.getGasPrice();

      const data = await web3.eth.signTransaction(
        {
          from: user,
          to: '0x7070bD3Cc552F985a24DaAA29F2C8107F7c7e137',
          gas: 1000000,
          gasPrice,
          value: fixedAmountUSD,
          data: res.data.createBuyTickets.abi,
        },
        '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318'
      );
      console.log(data);
      const res_signed = await client.mutate({
        mutation: SUBMIT_SIGNED_TRANSACTION,
        variables: {
          rawTransaction: data,
        },
      });
    }

    setLoading(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody padding={8}>
          <Button variant="primary" onClick={handleBuyTicket}>
            Start Payment
          </Button>
          <Stepper
            index={activeStep}
            orientation="vertical"
            height="400px"
            gap="0"
          >
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Box flexShrink="0">
                  <Text fontWeight="bold">{step.title}</Text>
                  <Text fontSize="sm">{step.description}</Text>
                </Box>
                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default StepBuyTicket;
