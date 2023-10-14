import { Container } from '@chakra-ui/react';

import AccountSettingTab from './AccountSettingTab';

const AccountSettingPage = () => {
  return (
    <>
      <Container maxWidth="container.xl" my={8}>
        <AccountSettingTab />
      </Container>
    </>
  );
};

export default AccountSettingPage;
