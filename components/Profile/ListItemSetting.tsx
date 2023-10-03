import { Flex, HStack, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React from 'react';

import { LinkContent } from '@/utils/type';
import CreateIcon from 'public/assets/icons/generals/editing.svg';
import EyeIcon from 'public/assets/icons/generals/eye.svg';
import HelpIcon from 'public/assets/icons/generals/info.svg';
import PaymentIcon from 'public/assets/icons/generals/payment.svg';
import SettingIcon from 'public/assets/icons/generals/setting.svg';
import WalletIcon from 'public/assets/icons/generals/wallet.svg';
const ListItemSetting = () => {
  const List1: LinkContent[] = [
    {
      label: 'create_events',
      link: '/event/new',
      icon: CreateIcon,
    },
    {
      label: 'buy_and_sell_tickets',
      link: '/tickets',
      icon: PaymentIcon,
    },
    {
      label: 'buy_crypto',
      link: '/buy',
      icon: WalletIcon,
    },
  ];
  const List2: LinkContent[] = [
    {
      label: 'watch_list',
      link: '/event/new',
      icon: EyeIcon,
    },
    {
      label: 'setting',
      link: '/tickets',
      icon: SettingIcon,
    },
    {
      label: 'help_center',
      link: '/buy',
      icon: HelpIcon,
    },
  ];
  const { t } = useTranslation();
  return (
    <>
      <Flex gap={2} justifyContent="space-between" flexWrap="wrap">
        <Flex flexDirection="column" gap={4}>
          {List1.map(item => (
            <Link key={`item ${item.label}`} href={item.link}>
              <HStack
                _hover={{
                  color: 'primary.purple.500',
                }}
              >
                <Icon as={item.icon} height={5} width={5} />
                <Text>{t(item.label)}</Text>
              </HStack>
            </Link>
          ))}
        </Flex>
        <Flex flexDirection="column" gap={4}>
          {List2.map(item => (
            <Link key={`item ${item.label}`} href={item.link}>
              <HStack
                _hover={{
                  color: 'primary.purple.500',
                }}
              >
                <Icon as={item.icon} height={5} width={5} />
                <Text>{t(item.label)}</Text>
              </HStack>
            </Link>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default ListItemSetting;