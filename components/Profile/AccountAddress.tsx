import { useQuery } from '@apollo/client';
import { Box, HStack, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { useAccount } from 'wagmi';

import CopyData from '../Custom/CopyData';

import { SEARCH_PROFILE } from '@/graphql/query';
import { shortenAddress } from '@/utils/format/address';

interface IProps {
  onClose: () => void;
}
// Account Address Display Infomration
const AccountAddress = ({ onClose }: IProps) => {
  const { address } = useAccount();
  const { data: dataUser, refetch, loading } = useQuery(SEARCH_PROFILE);
  useEffect(() => {
    refetch();
  }, [address, loading]);

  return (
    <>
      <HStack gap={2} alignItems="center">
        <Box>
          {dataUser && dataUser.searchAddressProfile.avatar ? (
            <Image
              borderRadius="full"
              alt="Tickifi Profile Image"
              objectFit="cover"
              src={dataUser.searchAddressProfile.avatar}
              height={10}
              width={10}
            />
          ) : (
            <Jazzicon
              diameter={40}
              seed={jsNumberForAddress(
                address || '0x1111111111111111111111111111111111111111'
              )}
            />
          )}
        </Box>
        <Box>
          <HStack role="group" cursor="pointer">
            <Text
              fontWeight="bold"
              _groupHover={{
                color: 'primary.gray.500',
              }}
            >
              {dataUser && dataUser.searchAddressProfile.username
                ? `${dataUser.searchAddressProfile.username} `
                : shortenAddress(address)}
            </Text>
            <CopyData
              h={4}
              w={4}
              display="none"
              _groupHover={{
                display: 'inherit',
              }}
              aria-label=""
              context={address || 'Error Address'}
            />
          </HStack>
          <Link href={`/account`} onClick={() => onClose()}>
            <Text
              fontSize="sm"
              color="primary.gray.500"
              cursor="pointer"
              transition="ease-in-out .3s"
              _hover={{
                color: 'primary.purple.500',
              }}
            >
              View Profile
            </Text>
          </Link>
        </Box>
      </HStack>
    </>
  );
};

export default AccountAddress;
