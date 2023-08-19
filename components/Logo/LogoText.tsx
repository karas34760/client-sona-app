import React from 'react';
import LogoIcon from 'public/logo/logo.svg';
import { HStack, Icon, Text } from '@chakra-ui/react';
const LogoText = () => {
  return (
    <>
      <HStack gap={4}>
        <Icon as={LogoIcon} height={12} width={12} />

        <Text
          fontSize={'28px'}
          fontWeight="bold"
          color="primary.purple.500"
          userSelect="none"
        >
          Kamask
        </Text>
      </HStack>
    </>
  );
};

export default LogoText;
