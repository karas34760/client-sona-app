import { Box } from '@chakra-ui/react';
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
      <Box dangerouslySetInnerHTML={createMarkup(description)}></Box>
    </>
  );
};

export default OverviewTicket;
