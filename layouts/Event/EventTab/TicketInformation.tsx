import { Flex, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
export interface TicketBuy {
  amount: number;
  asset: string;
  description: string;
  name: string;
  price: number;
  remaining: number;
  tier: number;
}
interface IProps {
  eventAddress: string;
  dataTicket: TicketBuy[];
}
const TicketInformation = ({ eventAddress, dataTicket }: IProps) => {
  return (
    <>
      <Flex flexDirection="column" gap={4} py={6}>
        {dataTicket.map(item => (
          <>
            <Link href={`/ticket/${eventAddress}/${item.tier}`} key={item.tier}>
              <HStack
                width="full"
                padding={6}
                borderRadius="lg"
                border="0.063rem solid"
                borderColor="primary.gray.300"
                cursor="pointer"
                fontSize="lg"
                transition="all 0.3s"
                justifyContent="space-between"
                fontWeight="bold"
                _hover={{
                  boxShadow: 'shadow.100',
                }}
              >
                <Text>{item.name}</Text>
                <Text>${item.price}</Text>
              </HStack>
            </Link>
          </>
        ))}
      </Flex>
    </>
  );
};

export default TicketInformation;
