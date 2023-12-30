import {
  Box,
  HStack,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import AvatarTypeTwo from '../Avatar/AvtarTypeTwo';

import useSearchRecent from 'hooks/useSearchRecent';

interface UltraSearchContextProps {
  type: string;
  heading: string;
  body: string;
  link: string;
  avatar?: string;
  hideAvatar?: boolean;
}

export default function SearchContext({
  type,
  heading,
  body,
  link,
  avatar,
  hideAvatar,
}: UltraSearchContextProps) {
  const { recentSetItem } = useSearchRecent();
  const colorTxt1 = useColorModeValue('primary.gray.500', 'white');
  const colorTxt2 = useColorModeValue('primary.gray.600', 'white');
  return (
    <Box color={colorTxt2}>
      <Link
        href={link}
        onClick={() => {
          recentSetItem(JSON.stringify({ heading, link }));
        }}
      >
        <Heading fontWeight="medium" fontSize="sm" pb={6} color={colorTxt1}>
          {type}
        </Heading>

        <HStack
          spacing={3}
          alignItems="flex-start"
          borderRadius="lg"
          padding={3}
          _hover={{}}
        >
          {!hideAvatar && (
            <Box>
              <AvatarTypeTwo address={avatar || heading} />
            </Box>
          )}

          <Box lineHeight={1} wordBreak="break-all">
            <Text fontSize="sm" fontWeight="bold" noOfLines={1} mb={1}>
              {heading}
            </Text>

            <Text
              display="inline-flex"
              alignItems="center"
              gap={1}
              as="span"
              fontSize="xs"
            >
              {body}
            </Text>
          </Box>
        </HStack>
      </Link>
    </Box>
  );
}
