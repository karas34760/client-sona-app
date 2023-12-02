/* eslint-disable no-unused-vars */
import { Box, Icon, Image, Input } from '@chakra-ui/react';
import React from 'react';

import EditIcon from 'public/assets/icons/generals/editing.svg';
interface IProps {
  background: File | undefined;
  setBackground: (fields: Partial<File | undefined>) => void;
}
const ProfileImageUpload = ({ background, setBackground }: IProps) => {
  const handleUpload = (file: FileList | null) => {
    if (background) URL.revokeObjectURL(background as never);

    if (file) {
      setBackground(file[0]);
    }
  };

  const handleRemove = () => {
    URL.revokeObjectURL(background as never);
    setBackground(undefined);
  };
  return (
    <>
      {background ? (
        <Box position="relative" width="full" height="full">
          <Input
            type="file"
            position="absolute"
            top={0}
            width="full"
            left={0}
            inset="0"
            variant="unstyled"
            cursor="pointer"
            opacity={0}
            onChange={event => handleUpload(event.target.files)}
          />
          <Image
            src={URL.createObjectURL(background)}
            alt=""
            objectFit="cover"
          />
        </Box>
      ) : (
        <Box position="relative" width="fit-content">
          <Input
            type="file"
            position="absolute"
            top={0}
            width="full"
            left={0}
            inset="0"
            variant="unstyled"
            cursor="pointer"
            opacity={0}
            onChange={event => handleUpload(event.target.files)}
          />
          <Icon
            as={EditIcon}
            height={10}
            width={10}
            color="primary.gray.600"
            cursor="pointer"
          />
        </Box>
      )}
    </>
  );
};

export default ProfileImageUpload;
