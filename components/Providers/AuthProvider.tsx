/* eslint-disable no-unused-vars */
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAccount, useDisconnect } from 'wagmi';
import Web3 from 'web3';

import LoadingVerify from '@/animations/Loading/LoadingVerify';
import { client } from '@/graphql/httplink';
import { CONNECT_WALLET, SEARCH_CONNECT_MSG } from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import {
  getAccessToken,
  saveTokensStorage,
  saveUserToStorage,
} from '@/redux/user/user-helper';
import { ITokens } from '@/redux/user/user-interface';
import { setUser } from '@/redux/user/user-slice';

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { user } = useAuth();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleAccept = async () => {
    const web3 = new Web3(window.ethereum);
    if (address) {
      const res_message = await client.mutate({
        mutation: SEARCH_CONNECT_MSG,
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
          mutation: CONNECT_WALLET,
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
          duration: 4000,
          isClosable: true,
        });
      }
    }
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const currentCheck = async () => {
      const accessToken = getAccessToken();

      if (address != user && address != null) {
        setLoading(true);
        dispatch(setUser(address));
        saveUserToStorage(address);
        await handleAccept();
        setLoading(false);
        return;
      }
      if (!accessToken && address != null) {
        setLoading(true);
        await handleAccept();
        setLoading(false);
        return;
      }
    };
    currentCheck();
  }, [address]);
  const router = useRouter();
  useEffect(() => {
    const checkAuth = async () => {
      const public_path = ['/account'];
      const accessToken = getAccessToken();
      if (
        !accessToken &&
        public_path.some(path => router.asPath.includes(path))
      ) {
        router.push('/');
        await disconnect();
      }
    };
    checkAuth();
  }, [address, router.pathname]);
  return (
    <>
      {children}

      <Modal
        isOpen={loading}
        onClose={() => {
          disconnect();
          setLoading(false);
        }}
      >
        <ModalOverlay />
        <ModalContent margin="auto">
          <ModalCloseButton />
          <VStack padding={6}>
            <LoadingVerify />
            <Text variant="type_sub_title">We are verify Now</Text>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthProvider;
