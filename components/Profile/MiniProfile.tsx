import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';

import ActivityTab from './MiniTab/ActivityTab';
import TicketTab from './MiniTab/TicketTab';

const MiniProfile = () => {
  return (
    <Tabs variant="enclosed" height="500px">
      <TabList>
        <Tab>Ticket</Tab>

        <Tab>Activity</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <TicketTab />
        </TabPanel>

        <TabPanel>
          <ActivityTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MiniProfile;
