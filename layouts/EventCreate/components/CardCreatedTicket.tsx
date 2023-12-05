import { Box, Button, Flex, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
// Card Display
interface IProps {
  name: string;
  amount: number;
  price: number;
  tier: number;
  description: string;
  image: File | undefined;
  // eslint-disable-next-line no-unused-vars
  deleteTicket: (index: any) => void;
  // eslint-disable-next-line no-unused-vars
  updateTicket: () => void;
}
const CardCreatedTicket = ({
  name,
  amount,
  price,
  description,
  tier,
  deleteTicket,
  updateTicket,
  image,
}: IProps) => {
  return (
    <>
      <Flex gap={4} flexWrap={{ md: 'nowrap', base: 'wrap' }}>
        <HStack border="1px solid" borderColor="primary.gray.300">
          <Flex
            bg="white"
            flexDirection="column"
            py={4}
            pl={4}
            gap={4}
            flex={1}
          >
            <Text fontWeight="bold" fontSize={{ md: 'xl', base: 'lg' }}>
              Name: {name}
            </Text>
            <Box display="inline-flex" alignItems="center" gap={4}>
              <Text fontSize="xl">Tier: {tier}</Text>
              <Text>{description}</Text>
            </Box>
            <HStack gap={6}>
              <Box>
                <Text fontSize="sm">Ticket Price</Text>
                <Text fontSize="2xl" fontWeight="bold">
                  ${price}
                </Text>
              </Box>
              <Box>
                <Text fontSize="sm">Amount</Text>
                <Text fontSize="2xl" fontWeight="bold">
                  {amount}
                </Text>
              </Box>
            </HStack>
          </Flex>
          <Flex flex={1}>
            {image && (
              <Image
                src={URL.createObjectURL(image)}
                objectFit="cover"
                alt="Tickifi | Image Create Event"
              />
            )}
          </Flex>
        </HStack>
        <Flex flexDirection={{ md: 'column', base: 'row' }} gap={5}>
          <Button onClick={updateTicket}>Edit</Button>
          <Button onClick={deleteTicket}>Delete Ticket</Button>
        </Flex>
      </Flex>
    </>
  );
};

export default CardCreatedTicket;
