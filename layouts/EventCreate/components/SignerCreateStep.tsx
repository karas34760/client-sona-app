import {
  Button,
  CloseButton,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  Input,
  Radio,
  RadioGroup,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { ISignerType } from '../Steps/StepSingerCreate';

import ImageUpload from '@/components/Upload/ImageUpload';
import SaveIcon from '@/public/assets/icons/generals/save.svg';
interface IProps {
  currentSinger: ISignerType;

  onClose: () => void;
  // eslint-disable-next-line no-unused-vars
  onSaveData: (newSinger: ISignerType) => void;
}

const SignerCreateStep = ({ currentSinger, onClose, onSaveData }: IProps) => {
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      name: currentSinger.name,
      age: currentSinger.age,
      asset: currentSinger.asset,
      sex: currentSinger.sex,
    },
    onSubmit: async values => {
      if (!values.asset) {
        toast({
          title: 'You Need to import Background Ticket',
          description: "We're need image of each ticket",
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        return;
      }
      onSaveData(values);
      onClose();
    },
    validateOnChange: true,
    validationSchema: Yup.object().shape({
      asset: Yup.mixed().required('Image Singer is required'),
    }),
  });
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
      <form onSubmit={formik.handleSubmit}>
        <Flex flexDirection="column" gap={3}>
          <FormControl variant="create_form" isRequired>
            <FormLabel>Singer Name</FormLabel>
            <Input
              placeholder="Enter Singer Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </FormControl>
          <HStack>
            <RadioGroup
              flexGrow={1}
              defaultValue={formik.values.sex}
              onChange={formik.handleChange}
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
            <FormControl variant="create_form" width="fit-content" isRequired>
              <FormLabel>Age</FormLabel>
              <Input
                placeholder="Enter Age "
                name="age"
                type="number"
                min={12}
                value={formik.values.age}
                onChange={formik.handleChange}
              />
            </FormControl>
          </HStack>
          <FormControl
            isInvalid={!!(formik.touched.asset && formik.errors.asset)}
          >
            <ImageUpload
              background={formik.values.asset}
              size={'1920px X 1080px'}
              label="Cover Ticket Image"
              setBackground={content => {
                formik.handleChange({
                  target: { name: 'asset', value: content.image },
                });
              }}
            />
            {formik.touched.asset && formik.errors.asset && (
              <FormErrorMessage>
                <Text> {formik.errors.asset}</Text>
              </FormErrorMessage>
            )}
          </FormControl>

          <Button width="full" leftIcon={<Icon as={SaveIcon} />} type="submit">
            Save
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default SignerCreateStep;
