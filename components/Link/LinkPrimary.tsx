import { Text, TextProps } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface IProps {
  label: string;
  link: string;
  sx?: TextProps;
}
const LinkPrimary = ({ label, link, sx }: IProps) => {
  return (
    <Link href={link}>
      <Text
        position="relative"
        transition=".5s ease-in-out"
        _hover={{
          color: 'primary.purple.500',
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
          backgroundColor: 'primary.purple.400',
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

export default LinkPrimary;
