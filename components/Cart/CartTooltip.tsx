import { Text } from '@chakra-ui/react';
import React from 'react';

import CustomToolTip from '../Custom/CustomToolTip';

import InfoIcon from 'public/assets/icons/generals/info.svg';
const CartTooltip = () => {
  return (
    <>
      <CustomToolTip icon={InfoIcon}>
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
      </CustomToolTip>
    </>
  );
};

export default CartTooltip;
