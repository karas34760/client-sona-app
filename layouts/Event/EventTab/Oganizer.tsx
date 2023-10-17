import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

import VerifySymbol from '@/components/Logo/VerifyIcon';

const Oganizer = () => {
  const colorText = useColorModeValue(';color="primary.gray.600', 'white');
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
              <Text color={colorText} fontSize="xl" fontWeight="bold">
                Midnight Society Founders Access Pass
              </Text>
              <VerifySymbol />
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
