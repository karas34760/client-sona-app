import { Flex, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
interface IProps {
  eventAddress: string;
}
const TicketInformation = ({ eventAddress }: IProps) => {
  const ListTicket = [
    {
      type: 'Vip Plantium',
      price: '200$',
    },
    {
      type: 'Vip Gold',
      price: '160$',
    },

    {
      type: 'Cat 1',
      price: '120$',
    },
  ];
  return (
    <>
      <Flex flexDirection="column" gap={4} py={6}>
        {ListTicket.map(item => (
          <>
            <Link href={`/ticket/${eventAddress}/1`} key={item.type}>
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
                <Text>{item.type}</Text>
                <Text>{item.price}</Text>
              </HStack>
            </Link>
          </>
        ))}
      </Flex>
    </>
  );
};

export default TicketInformation;
