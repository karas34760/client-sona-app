import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';

import useSearchResult from 'hooks/useSearchResult';
import WarningIcon from 'public/assets/icons/generals/bell.svg';

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
      alignItems="flex-start"
      justifyContent="center"
      textAlign="center"
      bg="theme.accent.100"
      padding={4}
      spacing={1}
    >
      <Icon as={WarningIcon} width={6} height={6} color="primary.purple.400" />

      <Box>
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
