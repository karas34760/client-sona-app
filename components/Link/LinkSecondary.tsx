import { Text, TextProps } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

import { colors } from '@/themes/theme';

interface IProps {
  label: string;
  link: string;
  sx?: TextProps;
}
const LinkSecondary = ({ label, link, sx }: IProps) => {
  return (
    <Link href={link}>
      <Text
        position="relative"
        backgroundPosition="-100%"
        transition=".5s ease-in-out"
        _hover={{
          bg: `linear-gradient(to right,${colors.primary.purple[600]},${colors.primary.purple[600]} 50%,#ddd 50%)`,
          bgSize: '200% 100%',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          backgroundPosition: '0',
          _after: {
            width: '100%',
            opacity: 1,
            left: 0,
          },
        }}
        _after={{
          content: "''",
          height: '0.125rem',
          width: 0,
          backgroundColor: 'primary.purple.500',
          position: 'absolute',
          bottom: '-0.125rem',
          right: 0,
          opacity: 0,
          transition: '.4s ease-in-out',
        }}
        {...sx}
      >
        {label}
      </Text>
    </Link>
  );
};

export default LinkSecondary;
