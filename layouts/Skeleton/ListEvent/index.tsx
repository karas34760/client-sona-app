import { Container, Grid } from '@chakra-ui/react';
import React from 'react';

import CardOneSkeleton from '../Card/CardOneSkeleton';

const ListEventSkeletons = () => {
  return (
    <>
      <Container maxWidth="container.xl">
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <CardOneSkeleton />
          <CardOneSkeleton />
          <CardOneSkeleton />
          <CardOneSkeleton />
        </Grid>
      </Container>
    </>
  );
};

export default ListEventSkeletons;
