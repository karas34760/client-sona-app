import LogoText from '@/components/Logo/LogoText';
import NavSearch from '@/components/Search/NavSearch';
import { Box, Container, Flex, HStack, Input } from '@chakra-ui/react';
import React from 'react';
import ListNavHeader from './components/ListNavHeader';

const Header = () => {
  return (
    <>
      <Box as="header">
        <Container maxWidth="container.lg" py={6}>
          <HStack justifyContent="space-between">
            <Flex alignItems="center" gap={8}>
              <LogoText />
              <NavSearch />
            </Flex>
            <Flex alignItems="center" gap={8}>
              <ListNavHeader />
            </Flex>
          </HStack>
        </Container>
      </Box>
    </>
  );
};

export default Header;
