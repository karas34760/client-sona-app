import { Box, Grid, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

import SettingAccount from './SettingAccount';
import SettingProfile from './SettingProfile';

import ListTabItem from '@/components/Tab/ListTabItem';
import TabButton from '@/components/Tab/TabButton';
import { TabItem } from '@/utils/type';
import BellIcon from 'public/assets/icons/generals/bell.svg';
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
              variant: 'unstyled',
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
      key: 'account',
      title: t('account'),
      component: (title, isActive) => {
        return (
          <TabButton
            sx={{
              variant: 'unstyled',
            }}
            icon={ProfileIcon}
            isActive={isActive}
            title={title}
            params={{
              tab: 'account',
            }}
          />
        );
      },
    },
    {
      key: 'notification',
      title: t('notification'),
      component: (title, isActive) => {
        return (
          <TabButton
            sx={{
              variant: 'unstyled',
            }}
            icon={BellIcon}
            isActive={isActive}
            title={title}
            params={{
              tab: 'notification',
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
              variant: 'unstyled',
            }}
            icon={BellIcon}
            isActive={isActive}
            title={title}
            params={{
              tab: 'offers',
            }}
          />
        );
      },
    },
    {
      key: 'account_support',
      title: t('account_support'),
      component: (title, isActive) => {
        return (
          <TabButton
            sx={{
              variant: 'unstyled',
            }}
            icon={BellIcon}
            isActive={isActive}
            title={title}
            params={{
              tab: 'account_support',
            }}
          />
        );
      },
    },
  ];
  return (
    <>
      <Grid gridTemplateColumns={{ lg: '25% 75%', md: '1fr 1fr' }}>
        <Box position="sticky" top="104px">
          <Text fontSize="lg" fontWeight="bold" color="primary.gray.400">
            Settings
          </Text>
          <ListTabItem
            items={TabItems}
            pt={4}
            position="sticky"
            top="104px"
            alignItems="flex-start"
            flexDirection="column"
            activeKey={(queryKey as string) || 'about'}
            flexWrap="wrap"
          />
        </Box>

        <Box pl={8}>
          {(queryKey === 'profile' || !queryKey) && <SettingProfile />}

          {queryKey === 'account' && <SettingAccount />}
        </Box>
      </Grid>
    </>
  );
};

export default AccountSettingTab;
