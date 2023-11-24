import { HStack, Icon, Input, Box, Text, Image } from '@chakra-ui/react';
import React from 'react';

import PlusIcon from '@/public/assets/icons/arrow/plus.svg';
import InfoIcon from '@/public/assets/icons/generals/info.svg';
interface IProps {
  background: File | undefined;
  size: '1920px X 1080px';
  label?: string;
  // eslint-disable-next-line no-unused-vars
  setBackground: (fields: Partial<{ image: File | undefined }>) => void;
}
const ImageUpload = ({
  background,
  setBackground,
  size,
  label = 'Cover Image for Laptop View',
}: IProps) => {
  const handleUpload = (file: FileList | null) => {
    if (background) URL.revokeObjectURL(background as never);

    if (file) {
      setBackground({ image: file[0] });
    }
  };

  const handleRemove = () => {
    URL.revokeObjectURL(background as never);
    setBackground({ image: undefined });
  };
  return (
    <>
      {background ? (
        <>
          <Image
            src={URL.createObjectURL(background)}
            alt=""
            objectFit="cover"
          />
          <Box cursor="pointer" onClick={handleRemove}>
            Remove
          </Box>
        </>
      ) : (
        <>
          <Box
            bg="primary.gray.200"
            py={12}
            mx="auto"
            width="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={0}
          >
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
                as={PlusIcon}
                height={16}
                width={16}
                _hover={{
                  opacity: 0.7,
                }}
                color="primary.purple.400"
              />
            </Box>

            <HStack width="full" justifyContent="center">
              <Icon as={InfoIcon} />
              <Text fontWeight="bold">{label}</Text>
            </HStack>

            <Text fontSize="sm" color="primary.gray.500">
              Recommended: {size}
            </Text>
          </Box>
        </>
      )}
    </>
  );
};

export default ImageUpload;
