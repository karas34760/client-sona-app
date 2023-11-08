/* eslint-disable no-unused-vars */
import { useToast } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import Web3 from 'web3';

import client from '@/graphql/client';
import { useSearchConnectMsgMutation } from '@/graphql/generates';
import { useAuth } from '@/hooks/useAuth';
import { EnumTokens, getAccessToken } from '@/redux/user/user-helper';
import { setUser } from '@/redux/user/user-slice';

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { user } = useAuth();
  const { address, isReconnecting, isConnecting } = useAccount();
  const { disconnect } = useDisconnect();

  const toast = useToast();
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
        toast({
          title: 'Verify Failed',
          description: 'We need you sign to verify account',
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (address != user && !isConnecting) {
      dispatch(setUser(address));
      handleAccept();
      console.log('Run E', user);
    }
  }, [address]);

  return <>{children}</>;
};
export default AuthProvider;
