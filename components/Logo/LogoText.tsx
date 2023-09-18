import { HStack, Icon, StackProps, Text, TextProps } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';

import LogoIcon from 'public/logo/logo.svg';
interface IProps {
  sx?: StackProps;
  styleText?: TextProps;
}
const LogoText = ({ sx, styleText }: IProps) => {
  const { t } = useTranslation();
  return (
    <>
      <HStack gap={4} width="inherit" {...sx}>
        <Icon
          as={LogoIcon}
          height={{ md: 12, base: 8 }}
          width={{ md: 12, base: 8 }}
        />
        <Text
          fontSize={'28px'}
          fontWeight="bold"
          color="primary.purple.500"
          userSelect="none"
          {...styleText}
        >
          {t('name_website')}
        </Text>
      </HStack>
    </>
  );
};

export default LogoText;
