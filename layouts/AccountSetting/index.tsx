import { Container, Text } from '@chakra-ui/react';

import AccountSettingTab from './AccountSettingTab';

const AccountSettingPage = () => {
  return (
    <>
      <Container maxWidth="container.xl" my={8}>
        <Text fontSize="lg" fontWeight="bold" color="primary.gray.400" mb={4}>
          Settings
        </Text>
        <AccountSettingTab />
      </Container>
    </>
  );
};

export default AccountSettingPage;
