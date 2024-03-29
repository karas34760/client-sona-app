import { Box, Grid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

import SettingNotification from './SettingNotification';
import SettingOffer from './SettingOffer';
import SettingOrganize from './SettingOrganize';
import SettingProfile from './SettingProfile';

import ListTabItem from '@/components/Tab/ListTabItem';
import TabButton from '@/components/Tab/TabButton';
import { TabItem } from '@/utils/type';
import BellIcon from 'public/assets/icons/generals/bell.svg';
import OfferIcon from 'public/assets/icons/generals/offer.svg';
import OrganizerIcon from 'public/assets/icons/generals/organizer.svg';
import ProfileIcon from 'public/assets/icons/generals/profile.svg';
const AccountSettingTab = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const queryKey = router.query?.tab;
  const TabItems: TabItem[] = [
    {
      key: 'profile',
      title: t('profile'),
      component: (title, isActive) => {
        return (
          <TabButton
            sx={{
              variant: { lg: 'tab_profile', base: 'tab' },
            }}
            iconStyle={{
              height: { md: 6, base: 5 },
              width: { md: 6, base: 5 },
              mr: { md: 4, base: 1 },
            }}
            icon={ProfileIcon}
            isActive={isActive}
            title={title}
            params={{
              tab: 'profile',
            }}
          />
        );
      },
    },
    {
      key: 'organizer',
      title: t('organizer'),
      component: (title, isActive) => {
        return (
          <TabButton
            sx={{
              variant: { lg: 'tab_profile', base: 'tab' },
              isDisabled: true,
            }}
            iconStyle={{
              height: { md: 6, base: 5 },
              width: { md: 6, base: 5 },
              mr: { md: 4, base: 1 },
            }}
            icon={OrganizerIcon}
            isActive={isActive}
            title={title}
            params={{
              tab: 'organizer',
            }}
          />
        );
      },
    },
    {
      key: 'notifications',
      title: t('notifications'),
      component: (title, isActive) => {
        return (
          <TabButton
            sx={{
              variant: { lg: 'tab_profile', base: 'tab' },
              isDisabled: true,
            }}
            iconStyle={{
              height: { md: 6, base: 5 },
              width: { md: 6, base: 5 },
              mr: { md: 4, base: 1 },
            }}
            icon={BellIcon}
            isActive={isActive}
            title={title}
            params={{
              tab: 'notifications',
            }}
          />
        );
      },
    },
    {
      key: 'offers',
      title: t('offers'),
      component: (title, isActive) => {
        return (
          <TabButton
            sx={{
              variant: { lg: 'tab_profile', base: 'tab' },
              isDisabled: true,
            }}
            iconStyle={{
              height: { md: 6, base: 5 },
              width: { md: 6, base: 5 },
              mr: { md: 4, base: 1 },
            }}
            icon={OfferIcon}
            isActive={isActive}
            title={title}
            params={{
              tab: 'offers',
            }}
          />
        );
      },
    },
  ];
  return (
    <>
      <Grid gridTemplateColumns={{ lg: '25% 75%', md: 'none' }}>
        <Box overflowX={{ lg: 'unset', base: 'scroll' }}>
          <ListTabItem
            items={TabItems}
            pt={4}
            py={{ lg: 0, base: 6 }}
            position={{ lg: 'sticky', base: 'relative' }}
            top={{ lg: '104px', base: '0px' }}
            alignItems="flex-start"
            flexDirection={{ lg: 'column', base: 'row' }}
            activeKey={(queryKey as string) || 'profile'}
          />
        </Box>

        <Box>
          {(queryKey === 'profile' || !queryKey) && <SettingProfile />}

          {queryKey === 'organizer' && <SettingOrganize />}
          {queryKey === 'notifications' && <SettingNotification />}
          {queryKey === 'offer' && <SettingOffer />}
        </Box>
      </Grid>
    </>
  );
};

export default AccountSettingTab;
