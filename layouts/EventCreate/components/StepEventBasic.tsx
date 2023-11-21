import {
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import LockIcon from '@/public/assets/icons/generals/lock.svg';
import GloablIcon from '@/public/assets/icons/generals/website.svg';
// Step Basic Event Info
export interface IEventDetailData {
  name: string;

  StartTime: string;
  EndTime: string;
  TimeForSell: string;
  DeadlineForSell: string;
}
interface IProps {
  // eslint-disable-next-line no-unused-vars
  event_data: IEventDetailData;
  // eslint-disable-next-line no-unused-vars
  updateFields: (fields: Partial<IEventDetailData>) => void;
}
const StepEventBasic = ({ event_data, updateFields }: IProps) => {
  return (
    <>
      <Flex flexDirection="column" gap={3} py={6}>
        <FormControl isRequired variant="create_form">
          <FormLabel>Event Name</FormLabel>
          <Input
            placeholder="Event name"
            id="name"
            value={event_data.name}
            onChange={e => updateFields({ name: e.target.value })}
          />
        </FormControl>
        <FormControl isRequired variant="create_form">
          <FormLabel>Event Display Name</FormLabel>
          <Input placeholder="First name" />
        </FormControl>
        <FormControl isRequired variant="create_form">
          <FormLabel>Event Visibility</FormLabel>
          <HStack width="full" gap={0}>
            <Flex
              flexGrow={1}
              textAlign="center"
              justifyContent="center"
              bg="primary.purple.400"
              color="white"
              gap={3}
              cursor="pointer"
              py={4}
            >
              <Icon as={GloablIcon} height={5} w={5} />
              <Text fontWeight="bold">PUBLIC</Text>
            </Flex>
            <Flex
              flexGrow={1}
              justifyContent="center"
              gap={3}
              py={4}
              border="0.063rem solid"
              borderColor="primary.purple.400"
              cursor="pointer"
            >
              <Icon as={LockIcon} height={6} w={6} />
              <Text fontWeight="bold">PRIVATE</Text>
            </Flex>
          </HStack>
        </FormControl>

        <HStack gap={5}>
          <FormControl variant="create_form">
            <FormLabel>Event Start</FormLabel>
            <Flex gap={2} alignItems="center">
              <Input
                size="md"
                type="datetime-local"
                id="StartTime"
                value={event_data.StartTime}
                onChange={e => updateFields({ StartTime: e.target.value })}
              />
            </Flex>
          </FormControl>
          <FormControl variant="create_form">
            <FormLabel>Event End</FormLabel>
            <Flex gap={2} alignItems="center">
              <Input
                size="md"
                type="datetime-local"
                id="EndTime"
                value={event_data.EndTime}
                onChange={e => updateFields({ EndTime: e.target.value })}
              />
            </Flex>
          </FormControl>
        </HStack>
        <HStack gap={5}>
          <FormControl variant="create_form">
            <FormLabel>Time For Sale</FormLabel>
            <Flex gap={2} alignItems="center">
              <Input
                size="md"
                type="datetime-local"
                id="TimeForSell"
                value={event_data.TimeForSell}
                onChange={e => updateFields({ TimeForSell: e.target.value })}
              />
            </Flex>
          </FormControl>
          <FormControl variant="create_form">
            <FormLabel>Deadline for Sale</FormLabel>
            <Flex gap={2} alignItems="center">
              <Input
                size="md"
                type="datetime-local"
                id="DeadlineForSell"
                value={event_data.DeadlineForSell}
                onChange={e =>
                  updateFields({ DeadlineForSell: e.target.value })
                }
              />
            </Flex>
          </FormControl>
        </HStack>
      </Flex>
    </>
  );
};

export default StepEventBasic;
