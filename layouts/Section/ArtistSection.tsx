import { Container, VStack, Text, Box, Image } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'next-i18next';
import Carousel from '@/components/Carousel/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Mousewheel, Navigation } from 'swiper';

const ArtistSection = () => {
  const { t } = useTranslation();
  const ListArtist = [
    {
      image:
        'https://demo.lunartheme.com/stevecadey/wp-content/uploads/2016/07/gallery1-960x615.jpg',
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
      image:
        'https://demo.lunartheme.com/stevecadey/wp-content/uploads/2016/07/gallery1-960x615.jpg',
    },
    {
      image:
        'https://demo.lunartheme.com/stevecadey/wp-content/uploads/2016/07/gallery1-960x615.jpg',
    },
  ];
  return (
    <Container maxWidth="container.xl">
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
      <Carousel /* styleButton={{ display: 'none' }} */>
        {ListArtist.map((item, index) => (
          <SwiperSlide key={index}>
            <Box>
              <Image
                src={item.image}
                alt={`image ${index}`}
                height="full"
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
