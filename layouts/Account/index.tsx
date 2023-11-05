/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { Box, Button, Container, HStack, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useAccount } from 'wagmi';
import Web3 from 'web3';

import AccountProfileTab from './AccountTab';
import MoreData from './UsedComponents/MoreData';
import SettingProfileImage from './UsedComponents/SettingProfileImage';

import client from '@/graphql/client';
import { useSearchConnectMsgMutation } from '@/graphql/generates';
import ShareData from '@/layouts/Account/UsedComponents/ShareData';
import { shortenAddress } from '@/utils/format/address';
import SettingIcon from 'public/assets/icons/generals/setting.svg';

const AccountDetailPage = () => {
  const { address } = useAccount();

  /*   const handleAccept = async () => {
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
      } catch (err) {
        throw new Error('You need to sign the message to be able to log in.');
      }
    }
  }; */

  return (
    <>
      <Box padding={0}>
        <SettingProfileImage />
        <Container maxWidth="container.xl" my={12}>
          <HStack
            justifyContent="space-between"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            <Box>
              <Text fontSize="2xl" fontWeight="bold">
                Karas Developer
              </Text>
              <HStack>
                <Text>Address:</Text>
                <Text
                  color="primary.gray.700"
                  cursor="pointer"
                  fontWeight="bold"
                  _hover={{
                    opacity: '0.5',
                  }}
                >
                  {shortenAddress(address, 15)}
                </Text>
              </HStack>
              <Text fontSize="sm" color="primary.gray.600">
                Joined September 2023
              </Text>
            </Box>
            <HStack gap={8}>
              <Button fontSize="sm" leftIcon={<Icon as={SettingIcon} />}>
                <Link href="/account/setting">Edit Profile</Link>
              </Button>
              <ShareData link="/" />
              <MoreData />
            </HStack>
          </HStack>
          <AccountProfileTab />
        </Container>
      </Box>
    </>
  );
};

export default AccountDetailPage;
