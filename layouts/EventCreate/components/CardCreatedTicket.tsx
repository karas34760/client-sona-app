import { Box, Button, HStack, Text } from '@chakra-ui/react';
import React from 'react';
// Card Display
interface IProps {
  name: string;
  amount: number;
  price: number;
  tier: number;
  // eslint-disable-next-line no-unused-vars
  deleteTicket: (index: any) => void;
  // eslint-disable-next-line no-unused-vars
  updateTicket: () => void;
}
const CardCreatedTicket = ({
  name,
  amount,
  price,
  tier,
  deleteTicket,
  updateTicket,
}: IProps) => {
  return (
    <>
      <HStack border="1px solid">
        <Box>{name}</Box>
        <Box>
          <Text>Tier: {tier}</Text>
          <Text>Amount: {amount}</Text>
        </Box>
        <Text>{price} $</Text>
        <Button onClick={updateTicket}>Edit</Button>
        <Button onClick={deleteTicket}>Delete Ticket</Button>
      </HStack>
    </>
  );
};

export default CardCreatedTicket;
