import SocialLink from '@/components/Link/SocialLink';
import LogoText from '@/components/Logo/LogoText';
import { colors } from '@/themes/theme';
import { convertHex } from '@/utils/utils';
import {
  Box,
  Container,
  Flex,
  HStack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  const bgFooter = useColorModeValue('#202020', 'dark.200');
  return (
    <>
      <Box as="footer" bg={bgFooter}>
        <Container maxWidth="container.xl">
          <HStack
            justifyContent="space-between"
            py={16}
            borderBottom="0.063em solid"
            borderBottomColor={convertHex(colors.divide[100], 0.16)}
          >
            <VStack justifyItems="flex-start" gap={4}>
              <LogoText
                styleText={{
                  fontSize: '48px',
                }}
              />
              <Text color="primary.gray.400">
                This growth plan will help you reach your resolutions and
                achieve the goals you have been striving towards.
              </Text>
              <Flex gap={6} width="full">
                <SocialLink />
              </Flex>
            </VStack>
            <HStack>
              <Box width="500px"></Box>
              <Box width="500px"></Box>
              <Box width="500px"></Box>
            </HStack>
          </HStack>
          <HStack width="full" justifyContent="center" py={4}>
            <Text>Karas</Text>
          </HStack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
