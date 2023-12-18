/* eslint-disable no-unused-vars */
import { Box, Icon, Input } from '@chakra-ui/react';
import React from 'react';

import EditIcon from 'public/assets/icons/generals/editing.svg';
interface IProps {
  setBackground: (fields: Partial<File | undefined>) => void;
}
const ProfileImageUpload = ({ setBackground }: IProps) => {
  const handleUpload = (file: FileList | null) => {
    if (file) {
      setBackground(file[0]);
    }
  };
  return (
    <>
      <Box
        position="relative"
        width="fit-content"
        cursor="pointer"
        role="group"
      >
        <Input
          type="file"
          position="absolute"
          top={0}
          width="full"
          left={0}
          inset="0"
          variant="unstyled"
          opacity={0}
          onChange={event => handleUpload(event.target.files)}
        />
        <Icon
          as={EditIcon}
          height={10}
          width={10}
          color="primary.gray.600"
          opacity={0}
          _groupHover={{
            opacity: 1,
          }}
        />
      </Box>
    </>
  );
};

export default ProfileImageUpload;
