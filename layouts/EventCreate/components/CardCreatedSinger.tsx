import { Box, Button, HStack, Text } from '@chakra-ui/react';

interface IProps {
  name: string;
  age: number;
  sex: string;

  // eslint-disable-next-line no-unused-vars
  deleteSinger: (index: any) => void;
}
const CardCreatedSinger = ({ name, age, sex, deleteSinger }: IProps) => {
  return (
    <>
      <HStack border="1px solid">
        <Box>{name}</Box>
        <Box>
          <Text>Sex: {sex}</Text>
          <Text>Age: {age}</Text>
        </Box>

        <Button onClick={deleteSinger}>Delete Singer</Button>
      </HStack>
    </>
  );
};

export default CardCreatedSinger;
