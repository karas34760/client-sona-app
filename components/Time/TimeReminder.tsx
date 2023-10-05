import { Box, Text, HStack, Icon, BoxProps } from '@chakra-ui/react';

import { useCountdown } from 'hooks/useCountDown';
import TimeIcon from 'public/assets/icons/generals/time.svg';

interface TimeProps {
  targetDate: number;
  text: string;
  sx?: BoxProps;
}

const TimeReminder = ({ targetDate, sx, text }: TimeProps) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  return (
    <>
      <Box
        background="primary.purple.600"
        borderRadius="1.125rem"
        backdropFilter="blur(5px)"
        bottom={3}
        left={3}
        {...sx}
      >
        <HStack py={1.5} px={2} color="white" gap={2} fontSize="sm">
          <Icon as={TimeIcon} h={5} w={5} />

          <HStack fontWeight="bold" gap={1} ml={1}>
            <Text>{text} </Text>
            {days != 0 && <Text>{days}d</Text>}
            <Text>{hours}h</Text>
            <Text>{minutes}m</Text>
            <Text>{seconds}s</Text>
          </HStack>
        </HStack>
      </Box>
    </>
  );
};

export default TimeReminder;
