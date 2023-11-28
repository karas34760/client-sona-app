import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Input,
  Flex,
  Text,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
export interface ILocationData {
  location: string;
}
interface IProps {
  location_data: ILocationData;
  // eslint-disable-next-line no-unused-vars
  updateFields: (fields: Partial<ILocationData>) => void;
  goToPrevious: () => void;
  goToNext: () => void;
}
const StepEventLocation = ({
  location_data,
  updateFields,
  goToNext,
  goToPrevious,
}: IProps) => {
  const [valueLocation, setValueLocation] = useState('physical');
  return (
    <>
      <Flex
        flexDirection="column"
        gap={6}
        height="full"
        minH={{ md: '350px', base: '300px' }}
      >
        <Box
          pb={6}
          borderBottom="0.063rem solid"
          borderBottomColor="primary.gray.300"
          mb={6}
        >
          <Text fontSize="lg" fontWeight="bold">
            Choose Event Type:
          </Text>
          <RadioGroup
            defaultValue={valueLocation}
            onChange={e => setValueLocation(e)}
          >
            <HStack spacing={5} direction="row">
              <Radio colorScheme="red" value="physical">
                Physical Location
              </Radio>
              <Radio colorScheme="green" value="online">
                Online Event
              </Radio>
            </HStack>
          </RadioGroup>
        </Box>
        <Box>
          <FormControl isRequired variant="create_form">
            <FormLabel>Event Venue</FormLabel>
            <Input
              id="location"
              value={location_data.location}
              onChange={e => updateFields({ location: e.target.value })}
              placeholder={
                valueLocation === 'physical'
                  ? 'Enter  Venue Name'
                  : 'Enter Web URL (Optional)'
              }
            />
          </FormControl>
        </Box>
      </Flex>
      <Flex gap={3}>
        <Button width="full" variant="primary" onClick={() => goToPrevious()}>
          Previous Step
        </Button>
        <Button width="full" variant="primary" onClick={() => goToNext()}>
          Next Step
        </Button>
      </Flex>
    </>
  );
};

export default StepEventLocation;
