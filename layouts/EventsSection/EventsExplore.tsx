import {
  Container,
  HStack,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import { TabContent } from '@/utils/type';
// su kien theo the loai
const EventsExplore = () => {
  const ListEvents: TabContent[] = [
    {
      label: 'All',
      key: 'all',
    },
    {
      label: 'Art',
      key: 'art',
    },
    {
      label: 'Conference',
      key: 'conference',
    },
    {
      label: 'Concert',
      key: 'concert',
    },
    {
      label: 'Festival',
      key: 'festival',
    },
  ];

  return (
    <Container maxWidth="container.xl">
      <Text variant="type_sub_title">Events</Text>
      <Text mb={5}>
        Lorem ipsum dolor sit amet consectetur. Iaculis vestibulum purus
        facilisi ultrices sed faucibus proin cum ut.
      </Text>

      <Tabs colorScheme="purple">
        <HStack width="full" justifyContent="space-between" flexWrap="wrap">
          <TabList>
            {ListEvents.map(item => (
              <Tab key={`event-tab-${item.key}`}>{item.label}</Tab>
            ))}
          </TabList>
          <Select placeholder="Select option" maxWidth="200px">
            <option value="option1">New Release</option>
            <option value="option1">Recent Update</option>
            <option value="option2">Daily View</option>
            <option value="option3">Week View</option>
            <option value="option3">Month View</option>
            <option value="option3">Total View</option>
          </Select>
        </HStack>
        <TabPanels>
          <TabPanel>
            <Text> All</Text>
          </TabPanel>
          <TabPanel>
            <Text> Art</Text>
          </TabPanel>
          <TabPanel>
            <Text> Conference</Text>
          </TabPanel>
          <TabPanel>
            <Text> Concert</Text>
          </TabPanel>
          <TabPanel>
            <Text> Festival</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default EventsExplore;
