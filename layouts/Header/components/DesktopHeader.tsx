import LogoText from '@/components/Logo/LogoText';
import NavSearch from '@/components/Search/NavSearch';
import { Flex, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import ListNavHeader from './ListNavHeader';
import BtnSwitchColor from '@/components/Switch/BtnSwitchColor';
import BtnSwitchLanguage from '@/components/Switch/BtnSwitchLanguage';
import ConnectWallet from '@/components/ConnectWallet/ConnectWallet';

const DesktopHeader = () => {
  return (
    <HStack justifyContent="space-between">
      <Flex alignItems="center" gap={8}>
        <Link href="/">
          <LogoText />
        </Link>

        <NavSearch />
      </Flex>
      <Flex alignItems="center" gap={8}>
        <ListNavHeader />
        <BtnSwitchLanguage />
        <BtnSwitchColor />
        <ConnectWallet />
      </Flex>
    </HStack>
  );
};

export default DesktopHeader;
