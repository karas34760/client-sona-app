import { Box, Button, Grid, Text } from '@chakra-ui/react';
import React from 'react';

import { useAuth } from '@/hooks/useAuth';

const BookingPage = () => {
  const { user } = useAuth();
  return (
    <>
      <Grid gridTemplateColumns={{ lg: '70% 30%', md: '1fr 1fr' }} gap={10}>
        <Box></Box>
        <Box>
          <Box padding={5}>
            <Text>Ticket Receiver</Text>
            <Text>Receiver: ${user}</Text>
          </Box>
          <Button>Purchase</Button>
        </Box>
      </Grid>
    </>
  );
};

export default BookingPage;
