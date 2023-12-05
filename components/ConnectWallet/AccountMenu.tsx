import { useQuery } from '@apollo/client';
import { Avatar, Flex, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { useAccount, useEnsName } from 'wagmi';

import ProfileDrawer from '../Profile/ProfileDrawer';

import { SEARCH_PROFILE } from '@/graphql/query';
import { shortenAddress } from '@/utils/format/address';

const AccountMenu = () => {
  const { address } = useAccount();

  const { data: ensName } = useEnsName({ address });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: dataUser } = useQuery(SEARCH_PROFILE);
  return (
    <>
      <Flex gap={1} alignItems="center" onClick={onOpen} cursor="pointer">
        {dataUser &&
        dataUser.searchAddressProfile &&
        dataUser.searchAddressProfile.avatar ? (
          <Avatar src={dataUser.searchAddressProfile.avatar} />
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
