import { Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';

const TicketInformation = () => {
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
          </>
        ))}
      </Flex>
    </>
  );
};

export default TicketInformation;
