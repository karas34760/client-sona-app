import { Box, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

import CreatedEventTab from './CreatedEventTab';
import FavoritedTab from './FavoritedTab';
import MyTicket from './MyTicket';
import OnSaleTicket from './OnSaleTicket';

import ListTabItem from '@/components/Tab/ListTabItem';
import TabButton from '@/components/Tab/TabButton';
import { TabItem } from '@/utils/type';

const AccountProfileTab = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const queryKey = router.query?.tab;
  const TabItems: TabItem[] = [
    {
      key: 'created_event',
      title: t('Created Events'),
      component: (title, isActive) => {
        return (
          <TabButton
            isActive={isActive}
            title={title}
            params={{
              tab: 'created_event',
            }}
          />
        );
      },
    },
    {
      key: 'my_tickets',
      title: t('my_tickets'),
      component: (title, isActive) => {
        return (
          <TabButton
            isActive={isActive}
            title={title}
            params={{
              tab: 'my_tickets',
            }}
          />
        );
      },
    },
    {
      key: 'my_sale_tickets',
      title: t('my_sale_tickets'),
      component: (title, isActive) => {
        return (
          <TabButton
            isActive={isActive}
            title={title}
            params={{
              tab: 'my_sale_tickets',
            }}
          />
        );
      },
    },
    {
      key: 'favorited',
      title: t('favorited'),
      component: (title, isActive) => {
        return (
          <TabButton
            isActive={isActive}
            title={title}
            params={{
              tab: 'favorited',
            }}
          />
        );
      },
    },
  ];
  const bg = useColorModeValue('white', 'transparent');
  return (
    <>
      <ListTabItem
        items={TabItems}
        pt={4}
        position="sticky"
        top="96px"
        bg={bg}
        zIndex="99"
        width="100%"
        activeKey={(queryKey as string) || 'created_event'}
        flexWrap="wrap"
      />
      <Box pt={8}>
        {(queryKey === 'created_event' || !queryKey) && <CreatedEventTab />}
        {queryKey === 'my_tickets' && <MyTicket />}
        {queryKey === 'my_sale_tickets' && <OnSaleTicket />}
        {queryKey === 'favorited' && <FavoritedTab />}
      </Box>
    </>
  );
};

export default AccountProfileTab;
