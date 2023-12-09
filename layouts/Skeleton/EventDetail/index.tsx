import {
  Container,
  Flex,
  VStack,
  Text,
  Box,
  Icon,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import React from 'react';

import CalendarImage from '@/components/Calendar/CalendarImage';
/* import LoveIcon from 'public/assets/icons/generals/heart.svg'; */
import LocationIcon from 'public/assets/icons/generals/location.svg';
import MoreIcon from 'public/assets/icons/generals/more.svg';
import ShareIcon from 'public/assets/icons/generals/share.svg';
import TimeIcon from 'public/assets/icons/generals/time.svg';
const SkeletonEventDetail = () => {
  const textColor = useColorModeValue('primary.gray.500', 'primary.purple.500');
  return (
    <>
      <Box width="full">
        <Box width="full">
          <Box
            height={{ lg: '560px', base: '300px' }}
            width="full"
            bgColor={textColor}
            bgSize="cover"
            bgPosition="center"
            backgroundRepeat="no-repeat"
          />
        </Box>
        <Container maxWidth="container.xl" py={{ lg: 20, base: 4 }}>
          <Flex gap={10} flexWrap="wrap">
            <CalendarImage month="Octorber" date="21" day="Saturday" />
            <VStack gap={3}>
              <Text fontSize="1.5rem" fontWeight="extrabold" maxWidth="650px">
                loading...
              </Text>
              <Flex alignItems="center" width="full" gap={2}>
                <Icon as={TimeIcon} width={6} height={6} color={textColor} />
                <Text color={textColor} fontWeight="bold">
                  loading...
                </Text>
              </Flex>
              <Flex alignItems="flex-start" width="full" gap={2}>
                <Icon
                  as={LocationIcon}
                  width={6}
                  height={6}
                  color={textColor}
                />
                <Box>
                  <Text color={textColor} fontWeight="extrabold">
                    loading...
                  </Text>
                  <Text fontSize="sm">loading....</Text>
                </Box>
              </Flex>
            </VStack>
            <Box flexGrow={1}>
              <HStack justifyContent="right" gap={10}>
                {/*    <ShareData icon={ShareIcon} /> */}
                <Icon as={ShareIcon} cursor="pointer" />
                <Icon as={MoreIcon} cursor="pointer" />
              </HStack>
            </Box>
          </Flex>
          <Text>Loading....</Text>
        </Container>
      </Box>
    </>
  );
};

export default SkeletonEventDetail;
