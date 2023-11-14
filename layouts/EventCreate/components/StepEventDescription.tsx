import { Box, Text } from '@chakra-ui/react';
import React from 'react';

import TextEditor from '@/components/TextEditor/TextEditor';

const StepEventDescription = () => {
  return (
    <>
      <Text mb={6} fontWeight="bold">
        Event Description
      </Text>
      <Box>
        <TextEditor />
      </Box>
    </>
  );
};

export default StepEventDescription;
