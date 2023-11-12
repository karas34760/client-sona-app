import { HStack, Radio, RadioGroup } from '@chakra-ui/react';
import React from 'react';

const StepEventLocation = () => {
  return (
    <>
      <RadioGroup defaultValue="2">
        <HStack spacing={5} direction="row">
          <Radio colorScheme="red" value="1">
            Physical Location
          </Radio>
          <Radio colorScheme="green" value="2">
            Online Event
          </Radio>
        </HStack>
      </RadioGroup>
    </>
  );
};

export default StepEventLocation;
