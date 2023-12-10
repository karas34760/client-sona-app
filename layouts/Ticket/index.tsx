import { useQuery } from '@apollo/client';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  HStack,
  Icon,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';

import ActionTicket from './ActionTicket';
import StepBuyTicket from './StepBuyTicket';
import ActivityTicket from './TicketDetailTab/ActivityTicket';
import OverviewTicket from './TicketDetailTab/OverviewTicket';

import LoadingData from '@/animations/Loading/LoadingData';
import ListTabItem from '@/components/Tab/ListTabItem';
import TabButton from '@/components/Tab/TabButton';
import { SEARCH_TICKETS } from '@/graphql/query';
import { TabItem } from '@/utils/type';
import VerifIcon from 'public/assets/icons/generals/verify.svg';

interface IProps {
  address: string;
  tier: string;
}
const TicketDetailPage = ({ address, tier }: IProps) => {
  const { data, loading } = useQuery(SEARCH_TICKETS, {
    variables: {
      eventAddress: address,
      tier: parseFloat(tier),
    },
  });

  const { t } = useTranslation();
  const router = useRouter();
  const queryKey = router.query?.tab;
  const [currentAmount, setCurrentAmount] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  if (loading) {
    return <LoadingData />;
  }
  if (!loading && !data.searchTickets.length) {
    router.push('/404');
    return;
  }
  const handleChange = (value: any) => setCurrentAmount(value);

  return (
    <>
      <Container maxW="container.xl" py={6}>
        <Grid gridTemplateColumns={{ md: '60% 40%', sm: '1fr 1fr' }} gap={10}>
          <Box>
            <Image
              src={data.searchTickets[0].asset}
              height={{ md: '500px', sm: 'auto' }}
              width="auto"
              alt=""
              borderRadius="xl"
            />
            <ListTabItem
              items={TabItems}
              pt={4}
              activeKey={(queryKey as string) || 'overview'}
              flexWrap="wrap"
            />
            <Box padding={2} py={5}>
              {(queryKey === 'overview' || !queryKey) && (
                <OverviewTicket
                  description={data.searchTickets[0].description}
                />
              )}

              {queryKey === 'activity' && <ActivityTicket />}
            </Box>
          </Box>
          <Box>
            <Flex flexDirection="column" gap={3} position="sticky" top="104px">
              <HStack cursor="pointer">
                <Image
                  height="24px"
                  width="24px"
                  src="/test/avatar/avatar_3.jpg"
                  objectFit="cover"
                  alt=""
                />

                <Text fontWeight="bold">NFTKing Club</Text>
                <Icon
                  as={VerifIcon}
                  height={5}
                  w={5}
                  color="secondary.info.200"
                />
              </HStack>

              <Text fontSize={{ md: '3xl', base: 'xl' }} fontWeight="bold">
                Ticket Multiple Banm Event
              </Text>

              <HStack>
                <Text color="primary.gray.500" fontWeight="bold">
                  Tier:
                </Text>
                <Text color="red" fontWeight="bold">
                  {data.searchTickets[0].tier}
                </Text>
              </HStack>

              <Box
                borderTop="0.063rem solid"
                borderTopColor="primary.gray.300"
                py={6}
              >
                <ActionTicket />
              </Box>
              <Flex
                border="0.063rem solid"
                borderColor="primary.gray.300"
                padding={4}
                borderRadius="xl"
                flexDirection="column"
                gap={4}
              >
                <Box
                  bg="primary.gray.300"
                  padding={4}
                  borderRadius="xl"
                  fontWeight="bold"
                >
                  <Text color="primary.gray.600">Price</Text>
                  <Text fontSize="xl">100$</Text>
                </Box>
                <Text
                  fontWeight="bold"
                  textAlign="center"
                  color="primary.gray.500"
                >
                  Quantity: {data.searchTickets[0].amount}
                </Text>

                <HStack justifyContent="space-between">
                  <Text fontSize="sm" textColor="primary.gray.600">
                    Number Buy Ticket (max 10):
                  </Text>
                  <NumberInput
                    size="lg"
                    maxW={32}
                    defaultValue={currentAmount}
                    onChange={handleChange}
                    max={10}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </HStack>
                <Button variant="primary" py={5} onClick={onOpen}>
                  Buy Now with ${data.searchTickets[0].price * currentAmount}
                </Button>
                <Text fontSize="sm" color="primary.gray.500">
                  Sale ends in 29 d 23 h 34 m 55 s{' '}
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Grid>
      </Container>
      {isOpen && (
        <StepBuyTicket
          isOpen={isOpen}
          onClose={onClose}
          tier={parseFloat(tier)}
          eventAddress={address}
          amount={currentAmount}
          payPrice={data.searchTickets[0].price * currentAmount}
        />
      )}
    </>
  );
};

export default TicketDetailPage;
