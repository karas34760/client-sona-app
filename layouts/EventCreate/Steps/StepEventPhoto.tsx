import { VStack } from '@chakra-ui/react';
import React from 'react';

import ImageUpload from '@/components/Upload/ImageUpload';

interface IProps {
  image: File | undefined;
  // eslint-disable-next-line no-unused-vars
  updateFields: (fields: Partial<{ image: File | undefined }>) => void;
}
const StepEventPhoto = ({ image, updateFields }: IProps) => {
  return (
    <VStack gap={8} width="full">
      <ImageUpload
        background={image}
        setBackground={updateFields}
        size="1920px X 1080px"
      />
    </VStack>
  );
};

export default StepEventPhoto;
