/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { useQuery } from '@apollo/client';
import { Box, Button, Container, HStack, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useAccount } from 'wagmi';

import AccountProfileTab from './AccountTab';
import MoreData from './UsedComponents/MoreData';
import SettingProfileImage from './UsedComponents/SettingProfileImage';

import { SEARCH_ACCOUNT_BY_ADDRESS } from '@/graphql/query';
import { useAuth } from '@/hooks/useAuth';
import ShareData from '@/layouts/Account/UsedComponents/ShareData';
import { shortenAddress } from '@/utils/format/address';
import SettingIcon from 'public/assets/icons/generals/setting.svg';

const AccountDetailPage = () => {
  const { address } = useAccount();
  const { user } = useAuth();
  const { loading, data, refetch } = useQuery(SEARCH_ACCOUNT_BY_ADDRESS, {
    variables: {
      address: user,
    },
  });

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
