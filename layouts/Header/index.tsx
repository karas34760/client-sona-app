import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Icon,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import ListNavHeader from './components/ListNavHeader';

import CartDrawer from '@/components/Cart/CartDrawer';
import ConnectWallet from '@/components/ConnectWallet/ConnectWallet';
import LogoText from '@/components/Logo/LogoText';
import Sidebar from '@/components/Modal/Sidebar';
import NavMobileSearch from '@/components/Search/NavMobileSearch';
import NavSearch from '@/components/Search/NavSearch';
import BtnSwitchColor from '@/components/Switch/BtnSwitchColor';
import BtnSwitchLanguage from '@/components/Switch/BtnSwitchLanguage';
import { breakpoints, colors } from '@/themes/theme';
import { convertHex, debounce, throttle } from '@/utils/utils';
import CloseIcon from 'public/assets/icons/arrow/close.svg';
import HamburgerIcon from 'public/assets/icons/arrow/hamburger.svg';
const Header = () => {
  const [transparency, setTransparency] = useState(0.0);
  const bgHeader = useColorModeValue(
    convertHex(colors.primary.gray[50], transparency * 0.85),
    convertHex(colors.dark[200], transparency * 0.85)
  );
  const bgHeaderOverlay = useColorModeValue('white', 'dark.200');

  function handleScroll() {
    /* if (window.pageYOffset > 50) {
      setNavbarExpanded(false);
    } else if (window.pageYOffset < 50) {
      setNavbarExpanded(true);
    } */

    if (window.pageYOffset > 500) {
      setTransparency(1);
    } else {
      setTransparency(window.pageYOffset / 500.0);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', throttle(debounce(handleScroll)));
    return () =>
      window.removeEventListener('scroll', throttle(debounce(handleScroll)));
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        as="header"
        zIndex="popover"
        position="sticky"
        top={0}
        right={0}
        bg={isOpen ? bgHeaderOverlay : bgHeader}
        backdropFilter={`blur(${transparency * 8}px)`}
      >
        <Container maxWidth={breakpoints['2xl']} px={{ md: 8, base: 4 }} py={6}>
          <HStack justifyContent="space-between">
            <Flex alignItems="center" gap={{ lg: 6, base: 4 }}>
              <Center
                display={{ lg: 'none', base: 'flex' }}
                verticalAlign="middle"
                color="primary.gray.400"
              >
                {isOpen ? (
                  <>
                    <Icon
                      onClick={onClose}
                      as={CloseIcon}
                      height={8}
                      width={8}
                    />
                  </>
                ) : (
                  <>
                    <Icon
                      onClick={onOpen}
                      as={HamburgerIcon}
                      height={{ md: 8, base: 6 }}
                      width={{ md: 8, base: 6 }}
                    />
                  </>
                )}
              </Center>

              <Link href="/">
                <LogoText />
              </Link>
              <Box display={{ base: 'none', md: 'flex' }}>
                <NavSearch />
              </Box>
            </Flex>
            <Flex alignItems="center" gap={{ base: 4, md: 6 }}>
              <Box
                display={{ lg: 'flex', base: 'none' }}
                gap={6}
                alignItems="center"
              >
                <ListNavHeader />
                <BtnSwitchLanguage />
                <BtnSwitchColor />
              </Box>
              <Box display={{ md: 'block', base: 'none' }}>
                <ConnectWallet />
              </Box>
              <Box display={{ md: 'none', base: 'block' }}>
                <NavMobileSearch />
              </Box>
              <CartDrawer />
            </Flex>
          </HStack>
        </Container>
        <Sidebar onClose={onClose} isOpen={isOpen} />
      </Box>
    </>
  );
};

export default Header;
