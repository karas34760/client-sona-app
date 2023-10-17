import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { useAccount, useEnsAvatar, useEnsName } from 'wagmi';

import ChakraImage from '../Custom/ChakraImage';
import ProfileDrawer from '../Profile/ProfileDrawer';

import { shortenAddress } from '@/utils/format/address';

const AccountMenu = () => {
  const { address } = useAccount();

  const { data: ensAvatar } = useEnsAvatar({ name: address });
  const { data: ensName } = useEnsName({ address });
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex gap={1} alignItems="center" onClick={onOpen} cursor="pointer">
        {ensAvatar ? (
          <ChakraImage
            src={ensAvatar}
            alt="ENS Avatar"
            width={{ md: 30, base: 48 }}
            height={{ md: 30, base: 48 }}
          />
        ) : (
          <Jazzicon
            diameter={32}
            seed={jsNumberForAddress(
              address || '0x1111111111111111111111111111111111111111'
            )}
          />
        )}

        <Text
          display={{ md: 'inline-block', base: 'none' }}
          _hover={{
            color: 'primary.gray.500',
          }}
        >
          {ensName ? `${ensName} ` : shortenAddress(address)}
        </Text>
      </Flex>
      <ProfileDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default AccountMenu;
