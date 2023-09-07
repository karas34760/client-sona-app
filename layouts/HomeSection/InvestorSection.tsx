import { Box, Center, Container, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'next-i18next';
import Carousel from '@/components/Carousel/Carousel';
import { SwiperSlide } from 'swiper/react';

const InvestorSection = () => {
  const { t } = useTranslation();
  const ListInvestor = [
    {
      image:
        'https://m0hdc7.n3cdn1.secureserver.net/wp-content/uploads/2022/08/kairon_trans.png',
      source: 'coinbase',
    },
    {
      image:
        'https://m0hdc7.n3cdn1.secureserver.net/wp-content/uploads/2022/08/Main-Blue.png',
      source: 'coinbase-1',
    },
    {
      image:
        'https://www.metapasshq.xyz/static/media/chingari.5e33844070e613a036f369587825d2e6.svg',
      source: 'coinbase-2',
    },
    {
      image:
        'https://m0hdc7.n3cdn1.secureserver.net/wp-content/uploads/2022/08/grant-thornton-vector-logo.png',
      source: 'coinbase-3',
    },
    {
      image:
        'https://www.ocavu.com/wp-content/uploads/2023/01/Nestle-Logo1.png',
      source: 'coinbase-4',
    },
    {
      image:
        'https://www.ocavu.com/wp-content/uploads/2023/01/DeepSilver-Logo.png',
      source: 'coinbase-5',
    },
    {
      image:
        'https://www.metapasshq.xyz/static/media/huddle01.c66480b764ba07319dc91d49ec3c1128.svg',
      source: 'coinbase-6',
    },
    {
      image:
        'https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg',
      source: 'coinbase-7',
    },
    {
      image:
        'https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg',
      source: 'coinbase-8',
    },
  ];
  return (
    <Container maxWidth="container.xl" py={16}>
      <Center flexDir="column" mb={6}>
        <Text variant="type_title">{t('our_investors')}</Text>
        <Text>{t('our_investors_content')}</Text>
      </Center>
      {/*  <Carousel styleButton={{ display: 'none' }}>
        {ListInvestor.map((item, index) => (
          <>
            <SwiperSlide key={`investor-img-${index}`}>
              <Box height="80px">
                <Image
                  src={item.image}
                  height="full"
                  width="full"
                  objectFit="contain"
                />
              </Box>
            </SwiperSlide>
          </>
        ))}
      </Carousel> */}
    </Container>
  );
};

export default InvestorSection;
