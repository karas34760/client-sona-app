import { Box, Text } from '@chakra-ui/react';
import DOMPurify from 'dompurify';
import React from 'react';
interface IProps {
  description: string;
}
const OverviewTicket = ({ description }: IProps) => {
  function createMarkup(html: string | null) {
    return {
      __html: DOMPurify.sanitize(html || ''),
    };
  }
  return (
    <>
      <Text fontWeight="extrabold" fontSize="2xl">
        Description
      </Text>
      <Box dangerouslySetInnerHTML={createMarkup(description)}></Box>
    </>
  );
};

export default OverviewTicket;
