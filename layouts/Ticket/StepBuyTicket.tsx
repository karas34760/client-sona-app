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
import { SUBMIT_TRANSACTION } from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import { usdToWei, weiToUSD } from '@/utils/format/money';
import {
  BALANCE_ADDRESS,
  CONTRACT_TICKIFI_ABI,
  CONTRACT_USDT_ABI,
  TICKIFI_ADDRESS,
  USDT_ADDRESS,
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
        JSON.parse(CONTRACT_USDT_ABI),
        USDT_ADDRESS
      );
      const fixedAmountUSD = usdToWei(payPrice + 2);
      const balanceAllow = await contract.methods
        .allowance(user, BALANCE_ADDRESS)
        .call();

      const balanceAllowUSDT = parseFloat(weiToUSD(balanceAllow, 1));
      if (balanceAllowUSDT < payPrice + 2) {
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
      goToNext();
      const contract_tickfi = new web3.eth.Contract(
        JSON.parse(CONTRACT_TICKIFI_ABI),
        TICKIFI_ADDRESS
      );

      const txHash = await contract_tickfi.methods
        .buyTickets(eventAddress, [tier], [amount])
        .send({
          from: user,
        });
      console.log(txHash);
      goToNext();
      const res_signed = await client.mutate({
        mutation: SUBMIT_TRANSACTION,
        variables: {
          blockHash: txHash.blockHash,
          blockNumber: txHash.blockNumber,
          transactionHash: txHash.transactionHash,
          from: txHash.from,
        },
      });
      console.log('Res Signed', res_signed);
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
