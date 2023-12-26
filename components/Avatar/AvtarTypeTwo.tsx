import {
  Avatar,
  AvatarBadge,
  AvatarBadgeProps,
  AvatarProps,
} from '@chakra-ui/react';
import React, { useState } from 'react';

interface AvatarTypeTwoProps {
  address: string;
  active?: string;
  sx?: AvatarProps;
  sxActive?: AvatarBadgeProps;
}

export default function AvatarTypeTwo({
  address,
  active,
  sx,
  sxActive,
}: AvatarTypeTwoProps) {
  const [currentBG, setCurrentBG] = useState('paragraph.accent.100');
  return (
    <Avatar
      border="0.09375rem solid"
      borderColor="currentColor"
      borderRadius="lg"
      bg={currentBG}
      padding={0}
      width={8}
      height={8}
      src={address}
      {...sx}
      onError={() => {
        setCurrentBG('theme.accent.200');
      }}
    >
      {active && (
        <AvatarBadge
          borderColor="theme.accent.200"
          bg={active}
          boxSize={4}
          {...sxActive}
        />
      )}
    </Avatar>
  );
}
