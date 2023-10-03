import { Box, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { useAccount, useEnsAvatar, useEnsName } from 'wagmi';

import ChakraImage from '../Custom/ChakraImage';
import CopyData from '../Custom/CopyData';

import { shortenAddress } from '@/utils/format/address';

// Account Address Display Infomration
const AccountAddress = () => {
  const { address } = useAccount();

  const { data: ensAvatar } = useEnsAvatar({ name: address });
  const { data: ensName } = useEnsName({ address });
  return (
    <>
      <HStack gap={2} alignItems="center">
        <Box>
          {ensAvatar ? (
            <ChakraImage src={ensAvatar} alt="ENS Avatar" />
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
              {ensName ? `${ensName} ` : shortenAddress(address)}
            </Text>
            <CopyData
              h={4}
              w={4}
              display="none"
              _groupHover={{
                display: 'inherit',
              }}
              aria-label=""
              context={ensName ? `${ensName} ` : shortenAddress(address)}
            />
          </HStack>
          <Link href={`/account/${address}`}>
            <Text fontSize="sm" color="primary.gray.500" cursor="pointer">
              View Profile
            </Text>
          </Link>
        </Box>
      </HStack>
    </>
  );
};

export default AccountAddress;
