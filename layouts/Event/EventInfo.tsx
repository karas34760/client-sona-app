import {
  Container,
  Flex,
  VStack,
  Text,
  Box,
  Icon,
  useColorModeValue,
  HStack,
  Grid,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React from 'react';

import BannerEventDetail from './BannerEventDetail';
import EventBooking from './EventBooking';
import AboutEvent from './EventTab/AboutEvent';
import CastingInfo from './EventTab/CastingInfo';
import Oganizer from './EventTab/Oganizer';
import TicketInformation from './EventTab/TicketInformation';

import CalendarImage from '@/components/Calendar/CalendarImage';
import ListTabItem from '@/components/Tab/ListTabItem';
import TabButton from '@/components/Tab/TabButton';
import { formatEventTime, getDayName } from '@/utils/format/date';
import { TabItem } from '@/utils/type';
import LocationIcon from 'public/assets/icons/generals/location.svg';
import MoreIcon from 'public/assets/icons/generals/more.svg';
import ShareIcon from 'public/assets/icons/generals/share.svg';
import TimeIcon from 'public/assets/icons/generals/time.svg';

interface IProps {
  data: any; //Event Search Data
  address: string;
}
const EventInfo = ({ data, address }: IProps) => {
  const textColor = useColorModeValue('primary.gray.500', 'primary.purple.500');
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
      <Box>
        <BannerEventDetail image={data.image} />
        <Container maxWidth="container.xl" py={{ lg: 20, base: 4 }}>
          <Flex gap={10} flexWrap="wrap">
            <CalendarImage
              month={new Date(data.startTime).toLocaleString('default', {
                month: 'long',
              })}
              date={new Date(data.startTime).getDate().toString()}
              day={getDayName(new Date(data.startTime).getDay())}
            />
            <VStack gap={3} alignItems="flex-start">
              <Text fontSize="1.5rem" fontWeight="extrabold" maxWidth="650px">
                {data.name}
              </Text>
              <Flex alignItems="center" width="full" gap={2}>
                <Icon as={TimeIcon} width={6} height={6} color={textColor} />
                <Text color={textColor} fontWeight="bold">
                  {`${formatEventTime(data.startTime)} - ${formatEventTime(
                    data.endTime
                  )}`}
                </Text>
              </Flex>
              <Flex alignItems="flex-start" width="full" gap={2}>
                <Icon
                  as={LocationIcon}
                  width={6}
                  height={6}
                  color={textColor}
                />
                <Box>
                  <Text color={textColor} fontWeight="extrabold">
                    Nguyen Du Gymnasium
                  </Text>
                  <Text fontSize="sm">{data.location}</Text>
                </Box>
              </Flex>
            </VStack>
            <Box flexGrow={1}>
              <HStack justifyContent="right" gap={10}>
                {/*    <ShareData icon={ShareIcon} /> */}
                <Icon as={ShareIcon} cursor="pointer" />
                <Icon as={MoreIcon} cursor="pointer" />
              </HStack>
            </Box>
          </Flex>
          <Grid gridTemplateColumns={{ lg: '70% 30%', md: '1fr 1fr' }} gap={10}>
            <Box>
              <ListTabItem
                items={TabItems}
                pt={4}
                position="sticky"
                top="90px"
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
                {(queryKey === 'about' || !queryKey) && (
                  <AboutEvent description={data.description} />
                )}
                {queryKey === 'casting' && (
                  <CastingInfo singers={data.singers} />
                )}
                {queryKey === 'ticket_info' && (
                  <TicketInformation
                    eventAddress={address}
                    dataTicket={data.tickets}
                  />
                )}
                {queryKey === 'oganizer' && (
                  <Oganizer organizer={data.organizer} />
                )}
              </Box>
            </Box>
            <EventBooking
              dataTicket={data.tickets}
              address={address}
              location={data.location}
              StartDate={formatEventTime(data.startTime)}
              EndDate={formatEventTime(data.endTime)}
            />
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default EventInfo;
