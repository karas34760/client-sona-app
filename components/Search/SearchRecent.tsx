import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import React, { useState } from 'react';

import useSearchRecent, { recentProps } from 'hooks/useSearchRecent';
import HistoryIcon from 'public/assets/icons/generals/history.svg';
import TrashIcon from 'public/assets/icons/generals/trash.svg';

interface SearchRecentProps {
  onExist: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchRecent({ onExist }: SearchRecentProps) {
  const { t } = useTranslation();

  const { recentGetItem, recentRemoveItem, recentRemoveAllItem } =
    useSearchRecent();
  const [currentRecentItem, setCurrentRecentItem] = useState(recentGetItem);
  return (
    <>
      {recentGetItem && recentGetItem.length ? (
        <Box padding={6} bg="white" color="black">
          <HStack
            justifyContent="space-between"
            pb={6}
            fontWeight="medium"
            fontSize="xs"
          >
            <Text color="primary.gray.500">{t('recent_search')}</Text>
            <Flex
              gap={1}
              alignItems="center"
              cursor="pointer"
              onClick={() => {
                recentRemoveAllItem();
                setCurrentRecentItem([]);
                onExist(false);
              }}
            >
              <Text color="primary.purple.400">{t('CLEAR_HISTORY')}</Text>
            </Flex>
          </HStack>

          <List>
            {React.Children.toArray(
              currentRecentItem?.map(recent => {
                const { heading, link } = JSON.parse(recent) as recentProps;
                return (
                  <ListItem
                    _notFirst={{
                      mt: 2,
                    }}
                  >
                    <Flex
                      justifyContent="space-between"
                      borderRadius="lg"
                      padding={3}
                      _hover={{}}
                    >
                      <Link href={link}>
                        <HStack wordBreak="break-all">
                          <Icon as={HistoryIcon} width={6} height={6} />

                          <Text fontWeight="medium" fontSize="sm" noOfLines={1}>
                            {heading}
                          </Text>
                        </HStack>
                      </Link>

                      <IconButton
                        aria-label="trash-icon"
                        minWidth="auto"
                        height="auto"
                        icon={<Icon as={TrashIcon} height={6} width={6} />}
                        onClick={() => {
                          const result = recentRemoveItem(recent);

                          if (result && result.length) {
                            setCurrentRecentItem(result);
                          } else {
                            onExist(false);
                          }
                        }}
                        _hover={{}}
                        _active={{}}
                      />
                    </Flex>
                  </ListItem>
                );
              })
            )}
          </List>
        </Box>
      ) : null}
    </>
  );
}
