import { Box, Center, Flex, HStack, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';

import { colors } from '@/themes/theme';
import { convertHex } from '@/utils/utils';
import HertIcon from 'public/assets/icons/generals/heart.svg';
interface IProps {
  image_link: string;
  name: string;
  oganization: string;
  time: string;
}
// Normal type Ticket or Concert
const CardTicketOne = ({ image_link, name, oganization, time }: IProps) => {
  return (
    <HStack
      role="group"
      flexDirection="column"
      gap={0}
      borderRadius="xl"
      overflow="hidden"
      transition="box-shadow 0.25s ease-in-out 0s, transform 0.25s ease 0s"
      _hover={{
        transform: 'translateY(-10px)',
        boxShadow: `${convertHex(
          colors.primary.purple[500],
          0.8
        )} 0px 4px 16px`,
      }}
      boxShadow={`${convertHex(colors.primary.purple[500], 0.2)} 0px 4px 16px`}
    >
      <Box position="relative" overflow="hidden">
        <Image src={image_link} alt="" objectFit="cover" />
        <Center
          position="absolute"
          top={3}
          right={3}
          opacity={0}
          transition="opacity 0.5s , visibility 0.5s"
          visibility="hidden"
          cursor="pointer"
          _groupHover={{
            opacity: 1,
            visibility: 'visible',
          }}
          height="fit-content"
          width="fit-content"
          px={2}
          py={2}
          borderRadius="full"
          bg="primary.gray.50"
        >
          <Icon as={HertIcon} height={4} width={4} color="primary.purple.400" />
        </Center>
      </Box>
      <Flex flexDirection="column" width="full" bg="white" padding={4}>
        <Text
          fontWeight="bold"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          color="primary.gray.800"
        >
          {name}
        </Text>
        <Text fontSize="sm" color="primary.gray.800">
          {oganization}
        </Text>
        <Text fontSize="sm" color="primary.gray.500">
          {time}
        </Text>
      </Flex>
    </HStack>
  );
};

export default CardTicketOne;
