import {
  Text,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Button,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDisconnect } from 'wagmi';
import Web3 from 'web3';

import AccountAddress from './AccountAddress';
import ListItemSetting from './ListItemSetting';
import MiniProfile from './MiniProfile';

import { useAuth } from '@/hooks/useAuth';
import { removeFromStorage } from '@/redux/user/user-helper';
import { setUser } from '@/redux/user/user-slice';
import { weiToUSD } from '@/utils/format/money';
import { CONTRACT_USDT_ABI, USDT_ADDRESS } from '@/utils/utils';
import LogoutIcon from 'public/assets/icons/arrow/logout.svg';
interface IProps {
  isOpen: boolean;
  onClose: () => void;
}
const ProfileDrawer = ({ isOpen, onClose }: IProps) => {
  const { disconnect } = useDisconnect();
  const dispatch = useDispatch();
  const bgDrawer = useColorModeValue('white', 'body.100');
  const web3 = new Web3(window.ethereum);
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [currentBalance, setCurrentBalance] = useState<string>('0.000');
  const getBalance = async () => {
    const contract = new web3.eth.Contract(
      JSON.parse(CONTRACT_USDT_ABI),
      USDT_ADDRESS
    );

    const balance = await contract.methods.balanceOf(user).call();

    setCurrentBalance(weiToUSD(balance, 1));
  };
  useEffect(() => {
    if (user) {
      getBalance();
    }
  }, [user, isLoading]);
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="sm"
        trapFocus={false}
      >
        <DrawerOverlay />
        <DrawerContent
          zIndex="popover"
          my={{ md: 4, base: 0 }}
          mr={{ md: 4, base: 0 }}
          borderRadius={{ md: '1rem', base: 0 }}
          bg={bgDrawer}
          overflow="hidden"
        >
          <Flex flexDirection="column" gap={4} py={6} px={6}>
            <Flex alignItems="center" justifyContent="space-between">
              <AccountAddress onClose={onClose} />
              <Button
                onClick={() => {
                  router.push('/');
                  disconnect();
                  dispatch(setUser(null));
                  removeFromStorage();
                }}
                leftIcon={<Icon as={LogoutIcon} />}
              >
                Disconnect
              </Button>
            </Flex>
            <Text fontSize="3xl" fontWeight="bold">
              ${parseFloat(currentBalance).toFixed(2)}
            </Text>
            <ListItemSetting onClose={onClose} />
          </Flex>
          <MiniProfile />

          <Button variant="draw_close" onClick={onClose}>
            Close
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProfileDrawer;
