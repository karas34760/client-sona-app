import {
  Box,
  Container,
  Flex,
  Grid,
  HStack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

import LinkFooter from './components/LinkFooter';

import SocialLink from '@/components/Link/SocialLink';
import LogoText from '@/components/Logo/LogoText';
import { colors } from '@/themes/theme';
import { convertHex } from '@/utils/utils';

const Footer = () => {
  const bgFooter = useColorModeValue('#202020', 'dark.100');

  return (
    <>
      <Box as="footer" bg={bgFooter}>
        <Container maxWidth="container.xl">
          <HStack
            justifyContent="space-between"
            py={12}
            rowGap={6}
            flexWrap="wrap"
            borderBottom="0.063em solid"
            borderBottomColor={convertHex(colors.divide[100], 0.16)}
          >
            <VStack justifyItems="flex-start" gap={4} alignItems="flex-start">
              <LogoText
                styleText={{
                  fontSize: '3rem',
                }}
              />
              <Text color="primary.gray.400" maxW="300px">
                This growth plan will help you reach your resolutions and
                achieve the goals you have been striving towards.
              </Text>
              <Flex gap={6} width="full">
                <SocialLink />
              </Flex>
            </VStack>
            <Grid
              templateColumns={{ md: 'repeat(3, 1fr)', base: 'repeat(2, 1fr)' }}
              gap={24}
            >
              <LinkFooter />
            </Grid>
          </HStack>

          <HStack width="full" justifyContent="center" py={4}>
            <Text color="primary.gray.400" fontSize="sm">
              © 2023 , Karas - Brian Developers
            </Text>
          </HStack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
