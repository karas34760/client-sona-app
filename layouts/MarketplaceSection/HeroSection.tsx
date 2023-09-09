import { Box, Container } from '@chakra-ui/react';
import React from 'react';

const HeroSection = () => {
  const ListTopCollection = [
    {
      name: 'Octorber London',
      creator: 'Gala',
      is_verifiled: true,
      logo_url:
        'https://i.seadn.io/gcs/files/c40b45c205f2b1e00a82eaa33f243700.png?auto=format&dpr=1&w=3840',
      banner_url:
        'https://i.seadn.io/gcs/files/7863ae104cb8bfa207137131a53047c3.png?auto=format&dpr=1&w=3840',
      ticket: 500,
      events: 'octorber-london',
      average_price: 0.08,
    },
    {
      name: 'Hope x Gala',
      creator: 'Gala',
      is_verifiled: false,
      logo_url:
        'https://i.seadn.io/gcs/files/86fd383dd7a42fe696b13b1896767a33.png?auto=format&dpr=1&w=3840',
      banner_url:
        'https://i.seadn.io/gcs/files/1fff312ed4c0b0d4bb4b0ae73fd39586.png?auto=format&dpr=1&w=3840',
      ticket: 300,
      events: 'octorber-london',
      average_price: 0.08,
    },
    {
      name: 'LoudPunx',
      creator: 'Gala',
      is_verifiled: true,
      logo_url:
        'https://i.seadn.io/gcs/files/ad9b7cdca7bb0956644ae1ef3832ad8f.png?auto=format&dpr=1&w=384',
      banner_url:
        ' https://i.seadn.io/gcs/files/ee5c835ca7927237f4dbac8270dc4c0f.png?auto=format&dpr=1&w=3840',
      ticket: 300,
      events: 'octorber-london',
      average_price: 0.08,
    },
  ];
  return (
    <Box>
      <Container maxWidth="container.xl"></Container>
    </Box>
  );
};

export default HeroSection;