import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';

import ChakraImage from '../Custom/ChakraImage';

import { shortenAddress } from '@/utils/format/address';

const AccountMenu = () => {
  const { address, connector, isConnected } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ address });
  const { data: ensName } = useEnsName({ address });
  /*  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect(); */
  const { disconnect } = useDisconnect();
  return (
    <>
      {isConnected && connector && (
        <>
          <Menu>
            <MenuButton as={Button}>
              <Flex gap={1} alignItems="center">
                {ensAvatar ? (
                  <ChakraImage src={ensAvatar} alt="ENS Avatar" />
                ) : (
                  <Jazzicon
                    diameter={24}
                    seed={jsNumberForAddress(
                      address || '0x1111111111111111111111111111111111111111'
                    )}
                  />
                )}

                <Text>{ensName ? `${ensName} ` : shortenAddress(address)}</Text>
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuGroup>
                <MenuItem>My Account</MenuItem>
                <MenuItem>Payments </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup>
                <MenuItem>Deal</MenuItem>
                <MenuItem>My Collection</MenuItem>
              </MenuGroup>
              <MenuItem onClick={() => disconnect()}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </>
      )}
    </>
  );
};

export default AccountMenu;
