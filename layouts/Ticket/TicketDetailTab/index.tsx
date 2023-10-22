import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

import ActivityTicket from './ActivityTicket';
import OverviewTicket from './OverviewTicket';

import ListTabItem from '@/components/Tab/ListTabItem';
import TabButton from '@/components/Tab/TabButton';
import { TabItem } from '@/utils/type';

const TicketDetailTab = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const queryKey = router.query?.tab;
  const TabItems: TabItem[] = [
    {
      key: 'overview',
      title: t('overview'),
      component: (title, isActive) => {
        return (
          <TabButton
            isActive={isActive}
            title={title}
            params={{
              tab: 'overview',
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
  ];

  return (
    <>
      <ListTabItem
        items={TabItems}
        pt={4}
        /*       position="sticky"
        top="104px"
        width="100%" */
        activeKey={(queryKey as string) || 'overview'}
        flexWrap="wrap"
      />
      <Box padding={2} py={5}>
        {(queryKey === 'overview' || !queryKey) && <OverviewTicket />}

        {queryKey === 'activity' && <ActivityTicket />}
      </Box>
    </>
  );
};

export default TicketDetailTab;
