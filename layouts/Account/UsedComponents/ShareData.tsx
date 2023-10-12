import {
  Box,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  Text,
  HStack,
  As,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import ShareIcon from 'public/assets/icons/generals/share_2.svg';
import TwitterIcon from 'public/assets/icons/socials/twitter.svg';
import WebIcon from 'public/logo/logo.svg';
interface IProps {
  link: string;
  icon?: As;
}

const ShareData = ({ link, icon }: IProps) => {
  return (
    <>
      <Popover variant="primary">
        <Tooltip
          shouldWrapChildren
          label={
            <Box px={4} py={2} fontWeight="bold" color="primary.gray.800">
              Share
            </Box>
          }
          placement="top"
          bottom={0}
          borderRadius="md"
          aria-label="Tickifi Tooltip Share Data"
          bg="white"
        >
          <PopoverTrigger>
            <Box display="inline-block">
              <Icon
                position="relative"
                as={icon || ShareIcon}
                aria-label="Tickifi Share Icon"
                height={5}
                width={5}
                cursor="pointer"
              />
            </Box>
          </PopoverTrigger>
        </Tooltip>

        <PopoverContent width="fit-content" maxWidth="100%">
          <HStack
            gap={3}
            padding={4}
            cursor="pointer"
            color="primary.gray.800"
            borderRadius="xl"
            _hover={{
              bg: 'primary.gray.300',
            }}
          >
            <Icon
              as={WebIcon}
              height={6}
              width={6}
              color="secondary.info.300"
            />
            <Text>Copy Link </Text>
          </HStack>
          <Link href={link} target="_blank">
            <HStack
              gap={3}
              padding={4}
              cursor="pointer"
              color="primary.gray.800"
              borderRadius="xl"
              _hover={{
                bg: 'primary.gray.300',
              }}
            >
              <Icon
                as={TwitterIcon}
                height={6}
                width={6}
                color="secondary.info.300"
              />
              <Text>Share on Twitter</Text>
            </HStack>
          </Link>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ShareData;
