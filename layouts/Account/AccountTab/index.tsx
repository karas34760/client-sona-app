import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

import ActivityTab from './ActivityTab';
import CollectionTab from './CollectionTab';
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
      key: 'collected',
      title: t('collected'),
      component: (title, isActive) => {
        return (
          <TabButton
            isActive={isActive}
            title={title}
            params={{
              tab: 'collected',
            }}
            sx={{
              variant: 'tab_2',
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
            sx={{
              variant: 'tab_2',
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
            sx={{
              variant: 'tab_2',
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
            sx={{
              variant: 'tab_2',
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
            sx={{
              variant: 'tab_2',
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
        activeKey={(queryKey as string) || 'collected'}
        flexWrap="wrap"
      />
      <Box padding={2}>
        {(queryKey === 'collected' || !queryKey) && <CollectionTab />}
        {queryKey === 'deal' && <DealTab />}
        {queryKey === 'favorited' && <FavoritedTab />}
        {queryKey === 'activity' && <ActivityTab />}
      </Box>
    </>
  );
};

export default AccountProfileTab;
