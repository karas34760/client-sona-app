import {
  Icon,
  Text,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
} from '@chakra-ui/react';
import React from 'react';

import InfoIcon from 'public/assets/icons/generals/info.svg';
const CartTooltip = () => {
  return (
    <>
      <Popover
        trigger="hover"
        arrowShadowColor="white"
        arrowPadding={4}
        arrowSize={12}
      >
        <PopoverTrigger>
          <IconButton
            variant="unstyled"
            display="flex"
            alignItems="center"
            aria-label="Tickifi Info-Btn"
            icon={<Icon as={InfoIcon} height={5} width={5} cursor="pointer" />}
          />
        </PopoverTrigger>

        <PopoverContent
          fontWeight="bold"
          bg="white"
          overflowWrap="break-word"
          maxWidth="200px"
          boxShadow="rgba(0, 0, 0, 0.2) 0px 6px 32px"
          bgColor="rgb(255, 255, 255)"
          border="none"
          borderRadius="lg"
          py={2}
          px={4}
          textAlign="center"
        >
          <PopoverArrow bg="white" />
          <Text color="primary.gray.800" fontSize="sm">
            Items in your cart are not guaranteed at purchase.
            <Text
              color="secondary.info.300"
              display="inline-block"
              cursor="pointer"
            >
              Learn More
            </Text>
          </Text>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CartTooltip;
