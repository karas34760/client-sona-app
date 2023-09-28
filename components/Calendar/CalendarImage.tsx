import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

interface IProps {
  month: string;
  date: string;
  day: string;
}
const CalendarImage = ({ month, date, day }: IProps) => {
  const borderColor = useColorModeValue('primary.gray.400', 'primary.gray.500');
  return (
    <>
      <Box
        bg="white"
        border="1px solid"
        width="85px"
        height="fit-content"
        borderRadius="2px"
        borderColor={borderColor}
        borderBottom="5px solid"
        borderBottomColor={borderColor}
        textAlign="center"
      >
        <Box
          fontWeight="bold"
          fontSize="10px"
          color="white"
          textTransform="uppercase"
          bgColor="secondary.danger.500"
          py={1}
        >
          {month}
        </Box>
        <Box py={1} fontSize="2rem" color="primary.gray.400">
          {date}
        </Box>
        <Box color="primary.gray.500" fontSize="sm">
          {day}
        </Box>
      </Box>
    </>
  );
};

export default CalendarImage;
