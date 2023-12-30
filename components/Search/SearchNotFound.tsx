import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';

import useSearchResult from 'hooks/useSearchResult';
import NotFoundIcon from 'public/assets/icons/generals/not-found.svg';

interface UltraSearchNotFoundProps {
  query: string;
}

export default function UltraSearchNotFound({
  query,
}: UltraSearchNotFoundProps) {
  const { t } = useTranslation();

  const { Event, EventLoading } = useSearchResult(query);

  const eventShouldZero = !Event?.searchEvents.total && !EventLoading;

  return eventShouldZero ? (
    <HStack
      justifyContent="center"
      textAlign="center"
      bg="theme.accent.100"
      padding={4}
      spacing={1}
      gap={4}
    >
      <Icon
        as={NotFoundIcon}
        width={10}
        height={10}
        color="primary.purple.400"
      />

      <Box textAlign="left">
        <Text color="paragraph.accent.100" fontWeight="semibold">
          {t('oops_not_found')}
        </Text>

        <Text color="paragraph.accent.300" fontSize="sm">
          {t('please_make_sure_enter_correct')}
        </Text>
      </Box>
    </HStack>
  ) : null;
}
