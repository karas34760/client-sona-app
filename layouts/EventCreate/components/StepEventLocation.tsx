import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const StepEventLocation = () => {
  const [valueLocation, setValueLocation] = useState('physical');
  return (
    <>
      <Box>
        <Box
          pb={6}
          borderBottom="0.063rem solid"
          borderBottomColor="primary.gray.300"
          mb={6}
        >
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
          {valueLocation === 'physical' ? (
            <FormControl isRequired variant="create_form">
              <FormLabel>Event Venue</FormLabel>
              <Input placeholder="Enter  Venue Name" />
            </FormControl>
          ) : (
            <FormControl variant="create_form">
              <FormLabel>Event Web Address</FormLabel>
              <Input placeholder="Enter Event Web Address(URL)" />
            </FormControl>
          )}
        </Box>
      </Box>
    </>
  );
};

export default StepEventLocation;
