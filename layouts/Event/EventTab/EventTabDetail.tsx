import { Box, Grid, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

import EventBooking from '../EventBooking';

import AboutEvent from './AboutEvent';
import CastingInfo from './CastingInfo';
import Oganizer from './Oganizer';
import TicketInformation from './TicketInformation';

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
  const bg = useColorModeValue('white', 'rgb(26, 32, 44)');
  return (
    <>
      <Grid gridTemplateColumns={{ lg: '70% 30%', md: '1fr 1fr' }} gap={10}>
        <Box>
          <ListTabItem
            items={TabItems}
            pt={4}
            position="sticky"
            top="104px"
            zIndex="10"
            bgColor={bg}
            width="100%"
            _after={{
              content: "''",
              height: '0.125rem',
              width: '100%',
              backgroundColor: 'primary.gray.300',
              position: 'absolute',
              bottom: '0.05rem',
              left: 0,
            }}
            activeKey={(queryKey as string) || 'about'}
            flexWrap="wrap"
          />
          <Box py={4} mr={{ md: 8, base: 0 }}>
            {(queryKey === 'about' || !queryKey) && <AboutEvent />}
            {queryKey === 'casting' && <CastingInfo />}
            {queryKey === 'ticket_info' && <TicketInformation />}
            {queryKey === 'oganizer' && <Oganizer />}
          </Box>
        </Box>
        <EventBooking />
      </Grid>
    </>
  );
};

export default EventTabDetail;