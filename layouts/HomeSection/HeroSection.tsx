import {
  Box,
  useColorModeValue,
  Text,
  Container,
  HStack,
  Button,
  Flex,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';

const HeroSection = () => {
  const bg = useColorModeValue('gradient.300', 'transparent');
  const { t } = useTranslation();
  return (
    <Box py={16} bg={bg}>
      <Container maxWidth="container.xl">
        <HStack
          justifyContent="space-between"
          flexWrap={{ md: 'nowrap', base: 'wrap-reverse' }}
          rowGap={6}
        >
          <Flex color="white" flexDirection="column" gap={6}>
            <Box>
              <Text variant="type_title" color="white">
                {t('nfts-new')},
              </Text>
              <Text variant="type_title">{t('fairer-ticking-concert')}</Text>
            </Box>

            <Text maxWidth="400px">{t('hero-home-content')}</Text>
            <Flex gap={6}>
              <Link href="/events">
                <Button variant="primary">{t('explore')}</Button>
              </Link>

              <Button variant="solid">{t('buy_ticket')}</Button>
            </Flex>
          </Flex>
          <Box
            width={{ lg: '43.75rem', md: '31.25rem', base: 'full' }}
            position="relative"
            height={{ lg: '40.625rem', md: '25rem', base: '18.75rem' }}
          >
            <Image
              style={{
                transformStyle: 'preserve-3d',
                transform:
                  'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              }}
              src={`assets/bg/bg-hero.svg`}
              priority
              fill
              alt="Tickifi | Hero Image"
            />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default HeroSection;
