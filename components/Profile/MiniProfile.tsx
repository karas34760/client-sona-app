import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';

import TicketTab from './MiniTab/TicketTab';

const MiniProfile = () => {
  return (
    <Tabs variant="enclosed" height="500px" overflowY="scroll" pb={8}>
      <TabList>
        <Tab>Ticket</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <TicketTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MiniProfile;
