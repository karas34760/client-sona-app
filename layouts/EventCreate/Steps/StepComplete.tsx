import { Box, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import React from 'react';

interface IProps {
  mortageTx: string;
  license: string;

  updateFields: (
    // eslint-disable-next-line no-unused-vars
    fields: Partial<{ mortageTx: string; license: string }>
  ) => void;
}
const StepComplete = ({ mortageTx, updateFields, license }: IProps) => {
  return (
    <>
      <Box>
        Now it time to finish , we need you send 5k $ to this organize USDT by
        address:
        <Text fontSize="lg" fontWeight="bold">
          0x06E3b4Fbc959fD7C800D92CDb865BE077cC86302
        </Text>
        All of this follow our lience and policy I need to paraphase this text
        to more clear.
      </Box>
      <FormControl isRequired variant="create_form">
        <FormLabel>Transaction Hash</FormLabel>
        <Input
          placeholder="Tx-Hash"
          value={mortageTx}
          onChange={e => updateFields({ mortageTx: e.target.value })}
        />
      </FormControl>
      <FormControl isRequired variant="create_form">
        <FormLabel>Lience Link</FormLabel>
        <Input
          placeholder="Lience"
          value={license}
          onChange={e => updateFields({ license: e.target.value })}
        />
      </FormControl>
    </>
  );
};

export default StepComplete;
