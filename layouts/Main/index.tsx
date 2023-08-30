import { Container } from '@chakra-ui/react';
import React from 'react';

interface MainProps {
  children: React.ReactNode;
}
const Main = ({ children }: MainProps) => {
  return (
    <>
      <Container
        pb={{
          md: 4,
          base: 3,
        }}
        width="full"
        as="main"
        display="flex"
        maxWidth="container.2xl"
        px={0}
        flexDirection="column"
        gap={32}
      >
        {children}
      </Container>
    </>
  );
};

export default Main;
