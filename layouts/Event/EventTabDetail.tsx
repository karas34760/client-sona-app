import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

import AboutEvent from './EventTab/AboutEvent';
import CastingInfo from './EventTab/CastingInfo';
import Oganizer from './EventTab/Oganizer';
import TicketInformation from './EventTab/TicketInformation';

import ListTabItem from '@/components/Tab/ListTabItem';
import TabButton from '@/components/Tab/TabButton';
import { TabItem } from '@/utils/type';

const EventTabDetail = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const queryKey = router.query?.tab;
  const TabItems: TabItem[] = [
    {
      key: 'about',
      title: t('about'),
      component: (title, isActive) => {
        return (
          <TabButton
            isActive={isActive}
            title={title}
            params={{
              tab: 'about',
            }}
          />
        );
      },
    },
    {
      key: 'casting',
      title: t('casting'),
      component: (title, isActive) => {
        return (
          <TabButton
            isActive={isActive}
            title={title}
            params={{
              tab: 'casting',
            }}
          />
        );
      },
    },
    {
      key: 'oganizer',
      title: t('oganizer'),
      component: (title, isActive) => {
        return (
          <TabButton
            isActive={isActive}
            title={title}
            params={{
              tab: 'oganizer',
            }}
          />
        );
      },
    },
    {
      key: 'ticket_info',
      title: t('ticket_info'),
      component: (title, isActive) => {
        return (
          <TabButton
            isActive={isActive}
            title={title}
            params={{
              tab: 'ticket_info',
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
        py={4}
        activeKey={(queryKey as string) || 'about'}
      />
      {(queryKey === 'about' || !queryKey) && <AboutEvent />}
      {queryKey === 'casting' && <CastingInfo />}
      {queryKey === 'ticket_info' && <TicketInformation />}
      {queryKey === 'oganizer' && <Oganizer />}
    </>
  );
};

export default EventTabDetail;
