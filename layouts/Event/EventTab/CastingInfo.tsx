import { Box, Grid, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const CastingInfo = () => {
  const CastingExample = [
    {
      id: '1',
      casting_actor: 'Karas KKK',
      casting_name: 'Park Young Nam',
      images: '/test/avatar/avatar_1.jpg',
    },
    {
      id: '2',
      casting_actor: 'Peter Pan',
      casting_name: 'Park Young Nam',
      images: '/test/avatar/avatar_2.jpg',
    },
    {
      id: '3',
      casting_actor: 'Peter Parker',
      casting_name: 'Park Young Nam',
      images: '/test/avatar/avatar_2.jpg',
    },
    {
      id: '4',
      casting_actor: 'Laconic Ecopan',
      casting_name: 'Park Young Nam',
      images: '/test/avatar/avatar_4.jpg',
    },
    {
      id: '5',
      casting_actor: 'Simura',
      casting_name: 'Park Young Nam',
      images: '/test/avatar/avatar_1.jpg',
    },
    {
      id: '6',
      casting_actor: 'What ....',
      casting_name: 'Park Young Nam',
      images: '/test/avatar/avatar_3.jpg',
    },
    {
      id: '3',
      casting_actor: 'What ....',
      casting_name: 'Park Young Nam',
      images: '/test/avatar/avatar_4.jpg',
    },
  ];
  return (
    <>
      <Box height="700px" color="primary.gray.500" overflow="hidden">
        <Text fontSize="sm">
          Casting schedules may change without prior notice depending on the
          circumstances of the actors and production companies.
        </Text>
        <Grid
          templateColumns={'repeat(5,1fr)'}
          columnGap={10}
          rowGap={6}
          mt={6}
        >
          {CastingExample.map(actor => (
            <>
              <VStack fontSize="sm" key={actor.id} width="full">
                <Box
                  borderRadius="50%"
                  height="128px"
                  overflow="hidden"
                  w="full"
                >
                  <Image
                    alt=""
                    src={actor.images}
                    objectFit="cover"
                    height="full"
                    width="full"
                  />
                </Box>

                <Text fontWeight="bold">{actor.casting_actor}</Text>
                <Text>{actor.casting_name}</Text>
              </VStack>
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CastingInfo;
