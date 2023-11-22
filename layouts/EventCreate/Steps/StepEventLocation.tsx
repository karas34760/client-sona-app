import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
  Input,
  Flex,
} from '@chakra-ui/react';
import React, { useState } from 'react';
export interface ILocationData {
  location: string;
}
interface IProps {
  location_data: ILocationData;
  // eslint-disable-next-line no-unused-vars
  updateFields: (fields: Partial<ILocationData>) => void;
}
const StepEventLocation = ({ location_data, updateFields }: IProps) => {
  const [valueLocation, setValueLocation] = useState('physical');
  return (
    <>
      <Flex flexDirection="column" justifyContent="space-between" height="full">
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
        </Box>
      </Flex>
    </>
  );
};

export default StepEventLocation;
