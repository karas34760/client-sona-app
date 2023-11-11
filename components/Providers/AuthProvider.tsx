/* eslint-disable no-unused-vars */
import { useToast } from '@chakra-ui/react';
import { FC, PropsWithChildren, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAccount, useDisconnect } from 'wagmi';
import Web3 from 'web3';

import { client } from '@/graphql/httplink';
import { ConnectWallet, SearchConnectMsg } from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import { saveTokensStorage, saveUserToStorage } from '@/redux/user/user-helper';
import { ITokens } from '@/redux/user/user-interface';
import { setUser } from '@/redux/user/user-slice';

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { user } = useAuth();
  const { address, isReconnecting, isConnecting } = useAccount();
  const { disconnect } = useDisconnect();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleAccept = async () => {
    const web3 = new Web3(window.ethereum);
    if (address) {
      const res_message = await client.mutate({
        mutation: SearchConnectMsg,
        variables: {
          address: address?.toString(),
        },
      });

      try {
        // @ts-ignore because web3 is defined here.
        const signature = await web3.eth.personal.sign(
          res_message.data.searchConnectMsg.message,
          address,
          ''
        );
        const res = await client.mutate({
          mutation: ConnectWallet,
          variables: {
            address,
            signature,
          },
        });

        const data_token: ITokens = {
          accessToken: res.data.connectWallet.accessToken,
          refreshToken: res.data.connectWallet.refreshToken,
        };
        await saveTokensStorage(data_token);
      } catch (err) {
        disconnect();
        dispatch(setUser(null));
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

  useEffect(() => {
    if (address != user && address != null) {
      dispatch(setUser(address));
      saveUserToStorage(address);
      handleAccept();
    }
  }, [address]);

  return <>{children}</>;
};
export default AuthProvider;
