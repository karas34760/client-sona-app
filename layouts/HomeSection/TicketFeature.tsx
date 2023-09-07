import React from 'react';
import TicketIcon from 'public/assets/icons/generals/tickets.svg';
import QrCodeIcon from 'public/assets/icons/generals/qr-code.svg';
import RoyalIcon from 'public/assets/icons/generals/royalties.svg';
import MusicNFT from 'public/assets/icons/generals/music-nft.svg';
import { As, Container, Flex, Grid, Icon, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
interface ListProps {
  title: string;
  content: string;
  icon: As;
}
const TicketFeature = () => {
  const ListTicketFeautre: ListProps[] = [
    {
      title: 'ticket_title_1',
      content: 'ticket_content_1',
      icon: TicketIcon,
    },
    {
      title: 'ticket_title_2',
      content: 'ticket_content_2',
      icon: RoyalIcon,
    },
    {
      title: 'ticket_title_3',
      content: 'ticket_content_3',
      icon: QrCodeIcon,
    },
    {
      title: 'ticket_title_4',
      content: 'ticket_content_4',
      icon: MusicNFT,
    },
  ];
  const { t } = useTranslation();
  return (
    <>
      <Container maxW="container.xl" py={16}>
        <Grid
          gridTemplateColumns={{ lg: 'repeat(4,1fr)', md: 'repeat(2,1fr)' }}
          gap={6}
        >
          {ListTicketFeautre.map(item => (
            <Flex flexDirection="column" key={`ticket_feature_${item.title}`}>
              <Icon
                as={item.icon}
                height="100px"
                width="100px"
                color="primary.purple.400"
              />
              <Text
                fontWeight="semibold"
                fontSize="1.5rem"
                color="primary.purple.400"
              >
                {t(item.title)}
              </Text>
              <Text>{t(item.content)}</Text>
            </Flex>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default TicketFeature;
