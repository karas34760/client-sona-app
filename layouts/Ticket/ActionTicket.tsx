import { Flex, Text, HStack, Icon, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import RefreshIcon from 'public/assets//icons/generals/refresh.svg';
import LoveIcon from 'public/assets/icons/generals/heart.svg';
import MoreIcon from 'public/assets/icons/generals/more.svg';
import ShareIcon from 'public/assets/icons/generals/share_2.svg';
const ActionTicket = () => {
  const bgButton = useColorModeValue('primary.gray.200', 'white');
  const colorText = useColorModeValue('primary.gray.500', 'white');
  return (
    <HStack justifyContent="space-between">
      <HStack gap={8}>
        <Flex
          alignItems="center"
          gap={3}
          padding={4}
          py={2}
          cursor="pointer"
          borderRadius="xl"
          transition="all ease-in-out .3s"
          role="group"
          color={colorText}
          _hover={{
            bg: bgButton,
          }}
        >
          <Icon
            as={LoveIcon}
            height={5}
            width={5}
            _groupHover={{ color: 'primary.gray.700' }}
          />
          <Text
            fontWeight="bold"
            _groupHover={{
              color: 'primary.gray.700',
            }}
          >
            0
          </Text>
        </Flex>

        <Flex
          alignItems="center"
          gap={3}
          padding={4}
          py={2}
          cursor="pointer"
          borderRadius="xl"
          transition="all ease-in-out .3s"
          role="group"
          color={colorText}
          _hover={{
            bg: bgButton,
          }}
        >
          <Icon
            as={ShareIcon}
            height={5}
            width={5}
            _groupHover={{ color: 'primary.gray.700' }}
          />
          <Text
            fontWeight="bold"
            _groupHover={{
              color: 'primary.gray.700',
            }}
          >
            Share
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          gap={3}
          padding={4}
          py={2}
          cursor="pointer"
          borderRadius="xl"
          transition="all ease-in-out .3s"
          role="group"
          color={colorText}
          _hover={{
            bg: bgButton,
          }}
        >
          <Icon
            as={RefreshIcon}
            height={5}
            width={5}
            _groupHover={{ color: 'primary.gray.700' }}
          />
          <Text
            fontWeight="bold"
            _groupHover={{
              color: 'primary.gray.700',
            }}
          >
            Refresh
          </Text>
        </Flex>
      </HStack>
      <Icon
        as={MoreIcon}
        cursor="pointer"
        _hover={{
          opacity: 0.5,
        }}
      />
    </HStack>
  );
};

export default ActionTicket;
