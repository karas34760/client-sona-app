import { Container, Flex, Text } from '@chakra-ui/react';
import React from 'react';

import CardFAQ from '@/components/Card/CardFAQ';

const FaqPage = () => {
  const ListQuetion = [
    {
      title: 'What is tickifi',
      content: 'dsad',
    },
    {
      title: 'How to use tickifi',
      content: '',
    },
    {
      title: 'Why use crypto wallet to connect website',
      content: '',
    },
    {
      title: 'What kind of payment tickifi use',
      content: '',
    },
    {
      title: 'What kind of events can use tickifi',
      content: '',
    },
    {
      title: 'when money events refund tickifi',
      content: '',
    },

    {
      title: 'How I can trade my tickets',
      content: '',
    },
    {
      title: 'when a event be blocked',
      content: '',
    },
    {
      title: 'Where I can contact',
      content: '',
    },
  ];
  return (
    <Container maxWidth="container.md" py={8}>
      <Text
        variant="type_title"
        textAlign="center"
        fontWeight="extrabold"
        textTransform="capitalize"
        mb={6}
      >
        frequently asked questions
      </Text>
      <Flex flexDirection="column" gap={6}>
        {ListQuetion.map(item => (
          <CardFAQ
            key={`Tickifi FAQ | ${item.title}`}
            title={item.title}
            content={item.content}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default FaqPage;
