import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';

import ActivityTab from './MiniTab/ActivityTab';
import PoolTab from './MiniTab/PoolTab';
import TicketTab from './MiniTab/TicketTab';

const MiniProfile = () => {
  return (
    <Tabs variant="enclosed" height="500px">
      <TabList>
        <Tab>Ticket</Tab>
        <Tab>Pool</Tab>
        <Tab>Activity</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <TicketTab />
        </TabPanel>
        <TabPanel>
          <PoolTab />
        </TabPanel>
        <TabPanel>
          <ActivityTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MiniProfile;
