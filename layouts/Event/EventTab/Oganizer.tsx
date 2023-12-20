import { useQuery } from '@apollo/client';
import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

import VerifySymbol from '@/components/Logo/VerifyIcon';
import { SEARCH_ACCOUNT_BY_ADDRESS } from '@/graphql/query';
import OrganizerSkeleton from '@/layouts/Skeleton/EventDetail/OrganizerSkeleton';
interface IProps {
  organizer: string;
}
const Oganizer = ({ organizer }: IProps) => {
  // eslint-disable-next-line no-unused-vars
  const { loading, data } = useQuery(SEARCH_ACCOUNT_BY_ADDRESS, {
    variables: {
      address: organizer,
    },
  });
  const colorText = useColorModeValue('primary.gray.600', 'white');
  if (loading) {
    return <OrganizerSkeleton />;
  }

  return (
    <>
      <Box>
        <HStack gap={10}>
          <Box borderRadius="xl" overflow="hidden" height="150px" width="150px">
            <Image
              alt=""
              src={data.searchAccountByAddress.profile.avatar}
              objectFit="cover"
              height="full"
              width="full"
            />
          </Box>
          <Box>
            <Flex alignItems="center" gap={2}>
              <Text color={colorText} fontSize="xl" fontWeight="bold">
                {data.searchAccountByAddress.profile.name || 'No Name'}
              </Text>
              {data.searchAccountByAddress.profile.verifiedAt && (
                <VerifySymbol />
              )}
            </Flex>
            <Text textOverflow="clip" mt={2} noOfLines={2}>
              This limited series of Midnight Society Access Passes grants the
              holder studio-specific perks including but not limited to: a
              one-of-a-kind PFP (profile pic) with unique VisorCortex, Call
              Sign, and other attributes of various rarity. Founders are
              entitled to voting rights on game features....
            </Text>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Oganizer;
