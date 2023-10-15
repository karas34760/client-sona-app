import { Box, Button, Container, HStack, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';

import AccountProfileTab from './AccountTab';
import MoreData from './UsedComponents/MoreData';
import SettingProfileImage from './UsedComponents/SettingProfileImage';

import ShareData from '@/layouts/Account/UsedComponents/ShareData';
import SettingIcon from 'public/assets/icons/generals/setting.svg';
const AccountDetailPage = () => {
  /*   const { data: ensAvatar } = useEnsAvatar({ name: address });
  const { data: ensName } = useEnsName({ address }); */
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
                <Text
                  color="primary.gray.500"
                  cursor="pointer"
                  fontWeight="bold"
                  _hover={{
                    opacity: '0.5',
                  }}
                >
                  0x1C83...32c5
                </Text>
                <Text color="primary.gray.600">Joined September 2023</Text>
              </HStack>
            </Box>
            <HStack gap={8}>
              <Button fontSize="sm" leftIcon={<Icon as={SettingIcon} />}>
                <Link href="/account/setting"> Edit Profile</Link>
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
