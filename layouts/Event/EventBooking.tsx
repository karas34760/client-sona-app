import { Box, Button } from '@chakra-ui/react';
import React from 'react';

import CalendarReservation from '@/components/Calendar/CalendarReservation';

const EventBooking = () => {
  return (
    <>
      <Box position="sticky" top="10%" zIndex="10">
        <CalendarReservation />

        <Button>Make a Reservation</Button>
      </Box>
    </>
  );
};

export default EventBooking;
