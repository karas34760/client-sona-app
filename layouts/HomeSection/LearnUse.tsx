import {
  Box,
  Button,
  Center,
  Container,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';

import BGLearn from '@/public/assets/images/bg_learn.png';
const LearnUse = () => {
  const bg = useColorModeValue('dark.200', 'transparent');
  const { t } = useTranslation();
  return (
    <Box bg={bg}>
      <Box
        bgImage={BGLearn.src}
        bgPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Container maxWidth="container.md">
          <Center
            flexDir="column"
            mb={6}
            height="840px"
            textAlign="center"
            gap={6}
          >
            <Text variant="type_title">{t('users_guide')}</Text>
            <Text fontSize={{ lg: '48px' }} color="white">
              {t('home_guide_subtitle')}
            </Text>
            <Text fontSize="20px" color="#EFEDFDB2">
              {t('home_guide_content')}
            </Text>
            <Link href="/faq">
              <Button variant="gradient_1" color="white">
                {t('learn_use_tickifi')}
              </Button>
            </Link>
          </Center>
        </Container>
      </Box>
    </Box>
  );
};

export default LearnUse;
