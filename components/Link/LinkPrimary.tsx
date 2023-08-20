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
        _hover={{
          color: 'primary.purple.400',
          _after: {
            width: '100%',
            opacity: 1,
            left: 0,
          },
        }}
        _after={{
          content: "''",
          height: '2px',
          width: 0,
          backgroundColor: 'primary.purple.400',
          position: 'absolute',
          bottom: '-2px',
          right: 0,
          opacity: 0,
          transition: '.5s',
        }}
        {...sx}
      >
        {label}
      </Text>
    </Link>
  );
};

export default LinkPrimary;
