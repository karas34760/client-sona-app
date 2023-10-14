import { Flex, FormControl, FormLabel, Switch, Text } from '@chakra-ui/react';
import React from 'react';
const SettingNotification = () => {
  const List = [
    {
      title: 'sale',
      description: 'When one of your NFTs sells',
      id: 'sale-alert',
      isChecked: false,
    },
    {
      title: 'listings',
      description: 'When an item is successfully listed on the marketplace',
      id: 'listings-alert',
      isChecked: false,
    },
    {
      title: 'successful bids',
      description: 'When your bid was successful and the NFT is in your wallet',
      id: 'success-bids-alert',
      isChecked: true,
    },
    {
      title: 'events',
      description: 'When event is accepted',
      id: 'events-alert',
      isChecked: true,
    },
    {
      title: 'Bids & Outbids',
      description:
        'When someone bids on one of your items or outbids yours bids',
      id: 'sale-alert',
      isChecked: true,
    },
    {
      title: 'purchase',
      description:
        'When a purchase is successful and you have received the NFT in your wallet',
      id: 'purchase-alert',
      isChecked: true,
    },
  ];
  return (
    <>
      <Text variant="type_sub_title">Notifications</Text>
      <Text color="primary.gray.500" mb={6}>
        Select the kinds of notifications you’d like receive to your email and
        in-app notifications center
      </Text>
      <Flex
        flexDirection="column"
        gap={5}
        border="0.063rem solid"
        borderRadius="xl"
        borderColor="primary.gray.300"
        padding={6}
      >
        {List.map(item => (
          <FormControl
            key={item.id}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <FormLabel>
              <Text fontSize="xl" fontWeight="bold" textTransform="capitalize">
                {item.title}
              </Text>
              <Text fontSize="sm">{item.description}</Text>
            </FormLabel>
            <Switch id={item.id} isChecked={item.isChecked} />
          </FormControl>
        ))}
      </Flex>
    </>
  );
};

export default SettingNotification;
