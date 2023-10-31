import React from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import Web3 from 'web3';

import client from '@/graphql/client';
import { useSearchConnectMsgMutation } from '@/graphql/generates';

const AcceptSign = () => {
  const { address, isConnected, isConnecting } = useAccount();
  const { disconnect } = useDisconnect();
  const handleAccept = async () => {
    const web3 = new Web3(window.ethereum);
    if (address) {
      const data = await useSearchConnectMsgMutation.fetcher(client, {
        address: address?.toString(),
      })();
      try {
        // @ts-ignore because web3 is defined here.
        const signature = await web3.eth.personal.sign(
          data.searchConnectMsg.message,
          address,
          '' // MetaMask will ignore the password argument here
        );
        console.log(signature);
      } catch (err) {
        disconnect();
        throw new Error('You need to sign the message to be able to log in.');
      }
    }
  };
  return <></>;
};

export default AcceptSign;
