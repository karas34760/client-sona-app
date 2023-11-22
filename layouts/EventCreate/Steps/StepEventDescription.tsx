import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import TextEditor from '@/components/TextEditor/TextEditor';
interface IProps {
  description: string;
  // eslint-disable-next-line no-unused-vars
  updateFields: (fields: Partial<{ description: string }>) => void;
}
const StepEventDescription = ({ description, updateFields }: IProps) => {
  const [convertedContent, setConvertedContent] = useState<string | ''>(
    description
  );
  useEffect(() => {
    updateFields({ description: convertedContent });
  }, [convertedContent]);
  return (
    <>
      <Text mb={6} fontWeight="bold">
        Event Description
      </Text>
      <Box>
        <TextEditor
          convertedContent={convertedContent}
          setConvertedContent={setConvertedContent}
        />
      </Box>
    </>
  );
};

export default StepEventDescription;
