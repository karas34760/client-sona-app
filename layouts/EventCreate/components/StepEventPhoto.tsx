import { VStack } from '@chakra-ui/react';
import React from 'react';

import ImageUpload from '@/components/Upload/ImageUpload';

/* const projectId = process.env.PROJECT_ID;
const projectKey = process.env.SECRET_KEY;
const auth =
  'Basic ' + Buffer.from(projectId + ':' + projectKey).toString('base64');
// Create connection to IPFS using infura
const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
}); 


*/
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
      {/*  <Box
        bg="primary.gray.200"
        py={12}
        mx="auto"
        width="80%"
        textAlign="center"
      >
        <Icon
          as={PlusIcon}
          height={16}
          width={16}
          cursor="pointer"
          _hover={{
            opacity: 0.7,
          }}
          color="primary.purple.400"
        />
        <HStack width="full" justifyContent="center">
          <Icon as={InfoIcon} />
          <Text fontWeight="bold">Cover Image for Mobile View</Text>
        </HStack>

        <Text fontSize="sm" color="primary.gray.500">
          Recommended: 1920px X 1080px
        </Text>
      </Box> */}
    </VStack>
  );
};

export default StepEventPhoto;
