import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
// Card Display
interface IProps {
  name: string;
  amount: number;
  price: number;
  tier: number;
}
const CardCreatedTicket = ({ name, amount, price, tier }: IProps) => {
  return (
    <>
      <HStack border="1px solid">
        <Box>{name}</Box>
        <Box>
          <Text>Tier: {tier}</Text>
          <Text>Amount: {amount}</Text>
        </Box>
        <Text>{price} $</Text>
      </HStack>
    </>
  );
};

export default CardCreatedTicket;
