import { Text } from '@chakra-ui/react';
import React from 'react';
const OverviewTicket = () => {
  return (
    <>
      <Text fontWeight="extrabold" fontSize="2xl">
        Description
      </Text>
      <Text fontWeight="bold">
        Moonbirds is the art collector’s PFP. Each of the 10,000 digital
        artworks in the collection grants holders access to unique experiences
        to connect with artists and own and champion their art. As a community,
        Moonbirds is a home for creatives, dreamers, and collectors seeking real
        connection as we all contribute to the future of web3 art, culture, and
        technology. Moonbird art is entirely in-chain, meaning the images are
        outputted directly from the smart contract, with no need for storage on
        IPFS or the like. There are also a number of customisable backgrounds
        available to holders based on their on-chain activity (such as other NFT
        holdings)—which disappear when the bird is transferred. You can check
        what each bird looks like with the different backgrounds (and see if
        they have any unclaimed rewards!) on our
        [site](https://proof.xyz/moonbirds)
      </Text>
    </>
  );
};

export default OverviewTicket;
