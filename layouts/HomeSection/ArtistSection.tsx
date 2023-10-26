import { Container, VStack, Text, Box, Image } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { Autoplay, Mousewheel, Navigation } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import Carousel from '@/components/Carousel/Carousel';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import 'swiper/css/bundle';
const ArtistSection = () => {
  const { t } = useTranslation();
  const ListArtist = [
    {
      image:
        'https://demo.lunartheme.com/stevecadey/wp-content/uploads/2016/07/gallery1-960x615.jpg',
    },
    {
      image:
        'https://media.vov.vn/sites/default/files/styles/large/public/2023-06/fzhnvbpagaalfdq.jpg',
    },
    {
      image: 'https://yh.io/assets/graphics/artists-block-02.png',
    },
    {
      image:
        'https://demo.lunartheme.com/stevecadey/wp-content/uploads/2016/07/gallery1-960x615.jpg',
    },
    {
      image:
        'https://demo.lunartheme.com/stevecadey/wp-content/uploads/2016/07/gallery1-960x615.jpg',
    },
    {
      image: 'https://yh.io/assets/graphics/artists-block-02.png',
    },
    {
      image:
        'https://demo.lunartheme.com/stevecadey/wp-content/uploads/2016/07/gallery1-960x615.jpg',
    },
    {
      image:
        'https://demo.lunartheme.com/stevecadey/wp-content/uploads/2016/07/gallery1-960x615.jpg',
    },
    {
      image: 'https://yh.io/assets/graphics/artists-block-02.png',
    },
    {
      image:
        'https://demo.lunartheme.com/stevecadey/wp-content/uploads/2016/07/gallery1-960x615.jpg',
    },
    {
      image:
        'https://demo.lunartheme.com/stevecadey/wp-content/uploads/2016/07/gallery1-960x615.jpg',
    },
  ];
  return (
    <Container maxWidth="container.2xl">
      <VStack width="full" mb={6}>
        <Text
          color="primary.purple.500"
          fontSize={{ md: '3rem', base: '2rem' }}
          fontWeight="semibold"
        >
          {t('artist')}
        </Text>
        <Text fontSize="lg">{t('artist_section_content')}</Text>
      </VStack>
      <Carousel
        styleButton={{ display: 'none' }}
        options={{
          modules: [Autoplay, Navigation, Mousewheel],
          autoplay: {
            delay: 2500,
          },
        }}
      >
        {ListArtist.map((item, index) => (
          <SwiperSlide key={index}>
            <Box height="250px">
              <Image
                src={item.image}
                alt={`image ${index}`}
                height="full"
                width="full"
                objectFit="cover"
                borderRadius="xl"
              />
            </Box>
          </SwiperSlide>
        ))}
      </Carousel>
    </Container>
  );
};

export default ArtistSection;
