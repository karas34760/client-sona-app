import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

import CreatedEventTab from './CreatedEventTab';
import FavoritedTab from './FavoritedTab';
import MyTicket from './MyTicket';

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
      key: 'my_ticket',
      title: t('my_ticket'),
      component: (title, isActive) => {
        return (
          <TabButton
            isActive={isActive}
            title={title}
            params={{
              tab: 'my_ticket',
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
  return (
    <>
      <ListTabItem
        items={TabItems}
        pt={4}
        position="sticky"
        top="96px"
        bg="white"
        zIndex="99"
        width="100%"
        activeKey={(queryKey as string) || 'created_event'}
        flexWrap="wrap"
      />
      <Box pt={8}>
        {(queryKey === 'created_event' || !queryKey) && <CreatedEventTab />}
        {queryKey === 'my_ticket' && <MyTicket />}
        {queryKey === 'favorited' && <FavoritedTab />}
      </Box>
    </>
  );
};

export default AccountProfileTab;
