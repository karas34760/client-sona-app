import { Button, useToast } from '@chakra-ui/react';
import React from 'react';
import Web3 from 'web3';

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

  const toast = useToast({
    position: 'top-right',
    duration: 3000,
    isClosable: true,
  });

  return (
    <>
      <Button
        variant="primary"
        onClick={() => {
          const handleSend = new Promise(async (resolve, reject) => {
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
              resolve(receipt.transactionHash);
            } catch (error) {
              reject(error);
            }
          });
          toast.promise(handleSend, {
            success: {
              title: 'Payment Resolver',
              description: 'Let Continous!',
            },
            error: {
              title: 'Payment rejected',
              description: 'Something wrong!',
            },
            loading: { title: 'Payment pending', description: 'Please wait' },
          });
        }}
      >
        Pay to Event
      </Button>
    </>
  );
};

export default SendMoneyContract;
