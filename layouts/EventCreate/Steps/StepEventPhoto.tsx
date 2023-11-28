import { Button, Flex, VStack, useToast } from '@chakra-ui/react';
import React from 'react';

import ImageUpload from '@/components/Upload/ImageUpload';

interface IProps {
  image: File | undefined;
  // eslint-disable-next-line no-unused-vars
  updateFields: (fields: Partial<{ image: File | undefined }>) => void;
  goToPrevious: () => void;
  goToNext: () => void;
}
const StepEventPhoto = ({
  image,
  updateFields,
  goToNext,
  goToPrevious,
}: IProps) => {
  const toast = useToast();
  return (
    <>
      <VStack gap={8} width="full" minH="400px" mb={6}>
        <ImageUpload
          background={image}
          setBackground={updateFields}
          size="1920px X 1080px"
        />
      </VStack>
      <Flex gap={3}>
        <Button width="full" variant="primary" onClick={() => goToPrevious()}>
          Previous Step
        </Button>
        <Button
          width="full"
          variant="primary"
          onClick={() => {
            if (!image) {
              toast({
                title: 'You Need to import Background Image Events',
                description: 'It is neccesary',
                status: 'error',
                duration: 3000,
                isClosable: true,
              });
              return;
            }
            goToNext();
          }}
        >
          Next Step
        </Button>
      </Flex>
    </>
  );
};

export default StepEventPhoto;
