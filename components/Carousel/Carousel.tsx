import { Box, BoxProps, Button, ButtonProps, Icon } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { Navigation, Mousewheel, Grid } from 'swiper';
import { Swiper } from 'swiper/react';
// Core modules imports are same as usual
import { SwiperOptions } from 'swiper/types';

import NextIcon from 'public/assets/icons/arrow/down.svg';
import 'swiper/css/mousewheel';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
interface IProps {
  children: React.ReactNode;
  options?: SwiperOptions;
  styleButton?: ButtonProps;
  sxProps?: BoxProps;
}
const Carousel = ({ children, options, styleButton, sxProps }: IProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Box
        position="relative"
        sx={{
          _hover: {
            '.btn-carousel': {
              opacity: 1,
              visibility: 'visible',
            },
          },
        }}
      >
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          modules={[Navigation, Mousewheel, Grid]}
          mousewheel={{
            forceToAxis: true,
          }}
          navigation={{
            prevEl: prevRef.current!,

            nextEl: nextRef.current!,
          }}
          onInit={swiper => {
            setTimeout(() => {
              if (swiper.params) {
                // Override prevEl & nextEl now that refs are defined

                //  @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line no-param-reassign

                swiper.params.navigation.prevEl = prevRef.current;

                // @ts-ignore
                // eslint-disable-next-line no-param-reassign
                swiper.params.navigation.nextEl = nextRef.current;

                // Re-init navigation
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
          breakpoints={{
            360: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
            630: {
              slidesPerView: 2,
            },
            920: {
              slidesPerView: 3,
            },

            1280: {
              slidesPerView: 4,
            },
          }}
          style={{
            position: 'relative',
            paddingBottom: '1rem',
            paddingTop: '1rem',
            /*   paddingLeft: '0.6rem',
            paddingRight: '0.6rem', */
          }}
          {...options}
        >
          {children}
        </Swiper>
        <Box
          display="flex"
          opacity={0}
          visibility="hidden"
          className="btn-carousel"
          transition="visibility 0.2s , opacity 0.2s ease-in-out"
          justifyContent="space-between"
          width="100%"
          position="absolute"
          sx={{
            top: '50%',
          }}
          {...sxProps}
        >
          <Button
            ref={prevRef}
            variant="navigation"
            sx={{
              zIndex: 10,
              left: { md: '-1.25rem', base: '-0.75rem' },
            }}
            {...styleButton}
          >
            <Icon as={NextIcon} height={6} w={6} transform="rotate(90deg)" />
          </Button>
          <Button
            ref={nextRef}
            variant="navigation"
            sx={{
              zIndex: 10,
              right: { md: '-1.25rem', base: '-0.75rem' },
            }}
            {...styleButton}
          >
            <Icon as={NextIcon} height={6} w={6} transform="rotate(-90deg)" />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Carousel;
