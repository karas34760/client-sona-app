/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { useQuery } from '@apollo/client';
import { Box, Button, Container, HStack, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useAccount } from 'wagmi';

import AccountProfileTab from './AccountTab';
import MoreData from './UsedComponents/MoreData';
import SettingProfileImage from './UsedComponents/SettingProfileImage';

import { SEARCH_PROFILE } from '@/graphql/query';
import ShareData from '@/layouts/Account/UsedComponents/ShareData';
import { shortenAddress } from '@/utils/format/address';
import SettingIcon from 'public/assets/icons/generals/setting.svg';

const AccountDetailPage = () => {
  const { address } = useAccount();
  const { data: dataUser } = useQuery(SEARCH_PROFILE);

  return (
    <>
      <Box padding={0}>
        {dataUser ? (
          <SettingProfileImage
            avatar={dataUser.searchAddressProfile.avatar}
            background={dataUser.searchAddressProfile.background}
          />
        ) : (
          <SettingProfileImage />
        )}

        <Container maxWidth="container.xl" my={12}>
          <HStack
            justifyContent="space-between"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            <Box>
              <Text fontSize="2xl" fontWeight="bold">
                {dataUser && dataUser.searchAddressProfile.username
                  ? dataUser.searchAddressProfile.username
                  : 'No Name'}
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
              {dataUser && dataUser.searchAddressProfile.bio && (
                <Text color="primary.gray.600">
                  {dataUser.searchAddressProfile.bio}
                </Text>
              )}
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
