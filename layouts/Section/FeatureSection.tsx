import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';
import FlexIcon from 'public/assets/icons/generals/flexibility.svg';
import MarketIcon from 'public/assets/icons/generals/marketplace.svg';
import ShieldIcon from 'public/assets/icons/generals/shield.svg';

const FeatureSection = () => {
  const ListFeature = [
    {
      icon: MarketIcon,
      title: 'Expansive NFT Marketplace',
      content:
        'Publish your tickets on multiple NFT ticketing marketplaces. Enable crypto and credit card payments through YellowHeart’s wallets across iOS, Android, and Desktop.',
    },
    {
      icon: FlexIcon,
      title: 'Engagement Management',
      content:
        'Build and manage your fan communities through our Web3-fueled and gamified engagement tools, enabling direct communication with the ones that matter the most to your business.',
    },
    {
      icon: FlexIcon,
      title: 'Flexible Delivery',
      content:
        'Customizable and brandable marketplaces for artists and small to large-scale venues, enabling NFT ticketing for single or year-round events. Enterprise offering for customizable direct access to YellowHeart’s platform.',
    },
    {
      icon: ShieldIcon,
      title: 'Robust & Secure Redemption',
      content:
        'Redeem tickets using YellowHeart’s intuitive App for secure and fraud-proof event entry. YellowHeart redemption provides customizable staff accounts, actionable insights, rapid flows, and built-in troubleshooting for a seamless experience',
    },
  ];
  return (
    <>
      <Box>
        <Text>The Next Generation of Ticking....</Text>
        <Text>
          Tickifi enables venues and artists to utilize its proprietary Web3
          ticketing platform to increase sales through tiered and customizable
          web3 tools to drive traffic, energize engagement, and reduce fraud and
          ticket scalping.
        </Text>
        <Button>Request Demo</Button>
      </Box>
    </>
  );
};

export default FeatureSection;
