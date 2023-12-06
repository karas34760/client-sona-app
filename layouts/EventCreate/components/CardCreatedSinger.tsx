import {
  Box,
  Button,
  Text,
  Image,
  VStack,
  Flex,
  HStack,
} from '@chakra-ui/react';

interface IProps {
  name: string;
  sex: string;

  image: File | undefined;
  // eslint-disable-next-line no-unused-vars
  updateSinger: () => void;
  // eslint-disable-next-line no-unused-vars
  deleteSinger: (index: any) => void;
}
const CardCreatedSinger = ({
  name,
  sex,
  deleteSinger,
  image,
  updateSinger,
}: IProps) => {
  return (
    <>
      <HStack border="1px solid" borderColor="primary.purple.500" padding={4}>
        <VStack fontSize="sm" width="full">
          <Box borderRadius="50%" height="128px" overflow="hidden" w="128px">
            {image && (
              <Image
                alt=""
                src={URL.createObjectURL(image)}
                objectFit="cover"
                height="full"
                width="full"
              />
            )}
          </Box>

          <Text fontWeight="bold">Name:{name}</Text>
          <Text>Gender:{sex}</Text>
        </VStack>
        <Flex flexDir="column" gap={6}>
          <Button onClick={updateSinger}>Edit</Button>
          <Button onClick={deleteSinger}>Delete</Button>
        </Flex>
      </HStack>
    </>
  );
};

export default CardCreatedSinger;
