import { Box, Flex, HStack, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';

import VerifyIcon from 'public/assets/icons/generals/verify.svg';
const Oganizer = () => {
  return (
    <>
      <Box>
        <HStack gap={10}>
          <Box borderRadius="xl" overflow="hidden">
            <Image
              alt=""
              src="https://i.seadn.io/gcs/files/a0947c872cefa3128ebe2cbb6b70fe7f.jpg?auto=format&dpr=1&w=384"
              height="full"
              width="full"
              objectFit="cover"
            />
          </Box>
          <Box>
            <Flex alignItems="center" gap={2}>
              <Text color="primary.gray.600" fontSize="xl" fontWeight="bold">
                Midnight Society Founders Access Pass
              </Text>
              <Icon
                as={VerifyIcon}
                color="secondary.info.300"
                height={6}
                width={6}
              />
            </Flex>
            <Text textOverflow="clip" mt={2} noOfLines={2}>
              This limited series of Midnight Society Access Passes grants the
              holder studio-specific perks including but not limited to: a
              one-of-a-kind PFP (profile pic) with unique VisorCortex, Call
              Sign, and other attributes of various rarity. Founders are
              entitled to voting rights on game features....
            </Text>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Oganizer;
