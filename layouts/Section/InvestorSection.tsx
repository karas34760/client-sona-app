import { Box, Center, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'next-i18next';
import Carousel from '@/components/Carousel/Carousel';
import { SwiperSlide } from 'swiper/react';

const InvestorSection = () => {
  const { t } = useTranslation();
  const ListInvestor = [
    {
      image:
        'https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg',
      source: 'coinbase',
    },
    {
      image: 'https://yh.io/assets/graphics/investors-logos/spartan.png',
      source: 'coinbase-1',
    },
    {
      image:
        'https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg',
      source: 'coinbase-2',
    },
    {
      image:
        'https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg',
      source: 'coinbase-3',
    },
    {
      image:
        'https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg',
      source: 'coinbase-4',
    },
    {
      image:
        'https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg',
      source: 'coinbase-5',
    },
    {
      image:
        'https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg',
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
    <Box>
      <Center flexDir="column" mb={6}>
        <Text variant="type_title">{t('our_investors')}</Text>
        <Text>{t('our_investors_content')}</Text>
      </Center>
      {/*  <Carousel
        styleButton={{ display: 'none' }}
        options={{
          breakpoints: {
            360: {
              slidesPerView: 3.1,
              spaceBetween: 10,
            },
            630: {
              slidesPerView: 4,
            },
            920: {
              slidesPerView: 5,
            },

            1280: {
              slidesPerView: 6,
            },
          },
        }}
      >
        {ListInvestor.map((item, index) => (
          <>
            <SwiperSlide key={`investor-img-${index}`}>
              <Image src={item.image} height="30px" objectFit="contain" />
            </SwiperSlide>
          </>
        ))}
      </Carousel> */}
    </Box>
  );
};

export default InvestorSection;
