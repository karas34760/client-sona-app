import LogoText from '@/components/Logo/LogoText';
import NavSearch from '@/components/Search/NavSearch';
import { Box, Container, Flex, HStack, Input } from '@chakra-ui/react';
import React from 'react';
import ListNavHeader from './components/ListNavHeader';
import BtnSwitchColor from '@/components/Switch/BtnSwitchColor';
import BtnSwitchLanguage from '@/components/Switch/BtnSwitchLanguage';
import ConnectWallet from '@/components/ConnectWallet/ConnectWallet';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <Box as="header">
        <Container maxWidth="container.xl" py={6}>
          <HStack justifyContent="space-between">
            <Flex alignItems="center" gap={8}>
              <Link href="/">
                <LogoText />
              </Link>

              <NavSearch />
            </Flex>
            <Flex alignItems="center" gap={8}>
              <ListNavHeader />
              <BtnSwitchColor />
              <BtnSwitchLanguage />
              <ConnectWallet />
            </Flex>
          </HStack>
        </Container>
      </Box>
    </>
  );
};

export default Header;
