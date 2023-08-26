import { Container } from '@chakra-ui/react';
import React from 'react';

interface MainProps {
  children: React.ReactNode;
}
const Main = ({ children }: MainProps) => {
  return (
    <>
      <Container
        py={{
          md: 4,
          base: 3,
        }}
        width="full"
        as="main"
        display="flex"
        maxWidth="container.2xl"
        flexDirection="column"
        gap={32}
      >
        {children}
      </Container>
    </>
  );
};

export default Main;
