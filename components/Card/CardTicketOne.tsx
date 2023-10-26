import {
  Center,
  Flex,
  HStack,
  Icon,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

import { colors } from '@/themes/theme';
import { convertHex } from '@/utils/utils';
import HertIcon from 'public/assets/icons/generals/heart.svg';
interface IProps {
  image_link: string;
  children?: React.ReactNode;
}
// Normal type Ticket or Concert
const CardTicketOne = ({ image_link, children }: IProps) => {
  const handleFavorite = (e: any) => {
    e.preventDefault();
  };
  const bgCard = useColorModeValue('white', ' dark.200');
  return (
    <>
      <HStack
        height="100%"
        role="group"
        flexDirection="column"
        gap={0}
        borderRadius="xl"
        overflow="hidden"
        bg={bgCard}
        transition="box-shadow 0.25s ease-in-out 0s, transform 0.25s ease 0s"
        _hover={{
          transform: 'translateY(-10px)',
          boxShadow: `${convertHex(
            colors.primary.purple[500],
            0.8
          )} 0px 4px 16px`,
        }}
        boxShadow={`${convertHex(
          colors.primary.purple[500],
          0.2
        )} 0px 4px 16px`}
      >
        <Center
          position="relative"
          overflow="hidden"
          bg="primary.purple.300"
          width="full"
        >
          <Image src={image_link} alt="" objectFit="cover" maxHeight="242px" />
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
            _hover={{
              bg: 'primary.purple.500',
              color: 'white',
            }}
            color="primary.purple.400"
            height="fit-content"
            width="fit-content"
            px={2}
            py={2}
            bg="white"
            borderRadius="full"
            onClick={e => handleFavorite(e)}
          >
            <Icon as={HertIcon} height={4} width={4} />
          </Center>
        </Center>
        <Flex flexDirection="column" width="full" padding={4} gap={2}>
          {children}
        </Flex>
      </HStack>
    </>
  );
};

export default CardTicketOne;
