import { Flex, FormControl, FormLabel, HStack, Input } from '@chakra-ui/react';
import React from 'react';

import { ONE_DAY, calculateMinEndTime } from '@/utils/format/date';

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

        <HStack gap={5} flexWrap={{ md: 'nowrap', base: 'wrap' }}>
          <FormControl variant="create_form" isRequired>
            <FormLabel>Event Start</FormLabel>
            <Flex gap={2} alignItems="center">
              <Input
                size="md"
                type="datetime-local"
                id="StartTime"
                value={event_data.StartTime}
                onChange={e => updateFields({ StartTime: e.target.value })}
                min={new Date().toISOString().split('.')[0]}
              />
            </Flex>
          </FormControl>
          <FormControl variant="create_form" isRequired>
            <FormLabel>Event End</FormLabel>
            <Flex gap={2} alignItems="center">
              <Input
                size="md"
                type="datetime-local"
                id="EndTime"
                value={event_data.EndTime}
                onChange={e => updateFields({ EndTime: e.target.value })}
                min={calculateMinEndTime(event_data.StartTime, ONE_DAY)}
              />
            </Flex>
          </FormControl>
        </HStack>
        <HStack gap={5} flexWrap={{ md: 'nowrap', base: 'wrap' }}>
          <FormControl variant="create_form" isRequired>
            <FormLabel>Time For Sale</FormLabel>
            <Flex gap={2} alignItems="center">
              <Input
                size="md"
                type="datetime-local"
                id="TimeForSell"
                value={event_data.TimeForSell}
                onChange={e => updateFields({ TimeForSell: e.target.value })}
                min={event_data.EndTime}
              />
            </Flex>
          </FormControl>
          <FormControl variant="create_form" isRequired>
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
                min={calculateMinEndTime(event_data.TimeForSell, ONE_DAY)}
              />
            </Flex>
          </FormControl>
        </HStack>
      </Flex>
    </>
  );
};

export default StepEventBasic;