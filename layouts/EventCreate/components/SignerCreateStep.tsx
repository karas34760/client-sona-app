import {
  Button,
  CloseButton,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import React from 'react';

import { ISignerType } from '../Steps/StepSingerCreate';

import ImageUpload from '@/components/Upload/ImageUpload';
import SaveIcon from '@/public/assets/icons/generals/save.svg';

interface IProps {
  currentSinger: ISignerType;
  // eslint-disable-next-line no-unused-vars
  setCurrentSinger: (singer: ISignerType) => void;
  onClose: () => void;
  // eslint-disable-next-line no-unused-vars
  onSaveData: (newSinger: ISignerType) => void;
}

const SignerCreateStep = ({
  currentSinger,
  setCurrentSinger,
  onClose,
  onSaveData,
}: IProps) => {
  return (
    <>
      <Flex justifyContent="flex-end">
        <CloseButton
          onClick={onClose}
          sx={{
            svg: {
              height: 5,
              width: 5,
            },
          }}
          color="secondary.danger.500"
        />
      </Flex>

      <Flex flexDirection="column" gap={3}>
        <FormControl variant="create_form">
          <FormLabel>Singer Name</FormLabel>
          <Input
            placeholder="Enter Singer Name"
            name="name"
            value={currentSinger.name}
            onChange={e =>
              setCurrentSinger({ ...currentSinger, name: e.target.value })
            }
          />
        </FormControl>
        <HStack>
          <RadioGroup
            flexGrow={1}
            defaultValue={currentSinger.sex}
            onChange={e => setCurrentSinger({ ...currentSinger, sex: e })}
          >
            <FormLabel>Gender</FormLabel>
            <HStack spacing={5} direction="row">
              <Radio colorScheme="red" value="male">
                Male
              </Radio>
              <Radio colorScheme="green" value="female">
                Female
              </Radio>
            </HStack>
          </RadioGroup>
          <FormControl variant="create_form" width="fit-content">
            <FormLabel>Age</FormLabel>
            <Input
              placeholder="Enter Singer Name"
              name="age"
              type="number"
              value={currentSinger.age}
              onChange={e =>
                setCurrentSinger({
                  ...currentSinger,
                  age: Number(e.target.value),
                })
              }
            />
          </FormControl>
        </HStack>

        <ImageUpload
          background={currentSinger.asset}
          size={'1920px X 1080px'}
          label="Cover Ticket Image"
          setBackground={fields =>
            setCurrentSinger({
              ...currentSinger,
              asset: fields?.image,
            })
          }
        />
        <Button
          width="full"
          leftIcon={<Icon as={SaveIcon} />}
          onClick={() => {
            onSaveData(currentSinger);
            onClose();
          }}
        >
          Save
        </Button>
      </Flex>
    </>
  );
};

export default SignerCreateStep;
