import { Box, Grid, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
interface IProps {
  singers: [
    {
      age: number;
      image: string;
      name: string;
      sex: string;
    },
  ];
}
const CastingInfo = ({ singers }: IProps) => {
  return (
    <>
      <Box height="700px" color="primary.gray.500" overflow="hidden">
        <Text fontSize="sm">
          Casting schedules may change without prior notice depending on the
          circumstances of the actors and production companies.
        </Text>
        <Grid
          templateColumns={{
            lg: 'repeat(5,1fr)',
            md: 'repeat(4,1fr)',
            base: 'repeat(2,1fr)',
          }}
          columnGap={10}
          rowGap={6}
          mt={6}
        >
          {singers.map((actor, index) => (
            <>
              <VStack
                fontSize="sm"
                key={`${actor.name}- actor-${index}`}
                width="full"
              >
                <Box
                  borderRadius="50%"
                  height="128px"
                  overflow="hidden"
                  w="128px"
                >
                  <Image
                    alt=""
                    src={actor.image}
                    objectFit="cover"
                    height="full"
                    width="full"
                  />
                </Box>

                <Text fontWeight="bold">{actor.name}</Text>
                <Text>{actor.age}</Text>
              </VStack>
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CastingInfo;
