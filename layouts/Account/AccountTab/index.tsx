import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

import ActivityTab from './ActivityTab';
import CreatedEventTab from './CreatedEventTab';
import DealTab from './DealTab';
import FavoritedTab from './FavoritedTab';

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
      key: 'deal',
      title: t('deal'),
      component: (title, isActive) => {
        return (
          <TabButton
            isActive={isActive}
            title={title}
            params={{
              tab: 'deal',
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
    {
      key: 'activity',
      title: t('activity'),
      component: (title, isActive) => {
        return (
          <TabButton
            isActive={isActive}
            title={title}
            params={{
              tab: 'activity',
            }}
          />
        );
      },
    },
    {
      key: 'created',
      title: t('created'),
      component: (title, isActive) => {
        return (
          <TabButton
            isActive={isActive}
            title={title}
            params={{
              tab: 'created',
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
        top="104px"
        width="100%"
        activeKey={(queryKey as string) || 'created_event'}
        flexWrap="wrap"
      />
      <Box pt={8}>
        {(queryKey === 'created_event' || !queryKey) && <CreatedEventTab />}
        {queryKey === 'deal' && <DealTab />}
        {queryKey === 'favorited' && <FavoritedTab />}
        {queryKey === 'activity' && <ActivityTab />}
      </Box>
    </>
  );
};

export default AccountProfileTab;
