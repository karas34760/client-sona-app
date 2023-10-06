import { Box, Button, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

import { DatePicker } from '@/components/Calendar/CalendarReservation/DatePicker';

const EventBooking = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Box height="full" width="full">
        <Flex
          flexDirection="column"
          position="sticky"
          top="104px"
          zIndex={10}
          gap={6}
        >
          <DatePicker
            value={startDate}
            onChange={(date: any) => setStartDate(date)}
          />
          <Button width="full">Make a Reservation</Button>
        </Flex>
      </Box>
    </>
  );
};

export default EventBooking;
