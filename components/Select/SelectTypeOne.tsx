import {
  Box,
  BoxProps,
  Button,
  Fade,
  HStack,
  Icon,
  useDisclosure,
  useOutsideClick,
  Text,
  Flex,
} from '@chakra-ui/react';
import { useRef } from 'react';
import React from 'react';

import Scrollbar from '../Custom/ScrollBar';

import CheveronDownIcon from 'public/assets/icons/arrow/down.svg';
interface IProps {
  selectValue: {
    title: string;
    value: string;
  };
  setSelectValue: React.Dispatch<React.SetStateAction<any>>;
  data: {
    title: string;
    value: string;
  }[];
  sx?: BoxProps;
}
const SelectTypeOne = ({ selectValue, data, setSelectValue }: IProps) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const ref = useRef(null);
  useOutsideClick({
    ref: ref,
    handler: () => {
      onClose();
    },
  });

  return (
    <>
      <Box ref={ref} position="relative" h="fit-content">
        <Button
          onClick={onToggle}
          rightIcon={<Icon boxSize="1rem" as={CheveronDownIcon} />}
        >
          <HStack spacing={2}>
            <Box fontSize="sm" fontWeight="bold">
              <Text>{selectValue.title}</Text>
            </Box>
          </HStack>
        </Button>
        <Fade in={isOpen}>
          <Scrollbar h="full" maxH="400px">
            <Box
              maxH="400px"
              overflow="auto"
              display={isOpen ? 'block' : 'none'}
              zIndex={100}
              width="200px"
              position="absolute"
              borderColor="divided.accent.200"
              borderWidth="1px"
              borderTopRadius={0}
              bg="white"
              color="primary.gray.800"
              borderTopWidth={0}
              roundedBottom="lg"
            >
              <Flex flexDirection="column" p={3}>
                {data.map(item => (
                  <Box
                    width="fit-content"
                    cursor="pointer"
                    /*  background={
                      item.value === selectValue.value
                        ? 'primary.purple.400'
                        : 'inherit'
                    } */
                    key={item.value}
                    borderRadius="lg"
                    py={3}
                    px={5}
                    fontWeight={
                      item.value === selectValue.value ? 'medium' : 'normal'
                    }
                    /*  sx={{
                      _hover: {
                        background:
                          item.value === selectValue.value
                            ? undefined
                            : 'divided.accent.300',
                      },
                    }} */
                    onClick={() => setSelectValue(item)}
                    /*  color={
                      item.value === selectValue.value
                        ? 'paragraph.accent.100'
                        : 'paragraph.accent.200'
                    } */
                  >
                    {item.title}
                  </Box>
                ))}
              </Flex>
            </Box>
          </Scrollbar>
        </Fade>
      </Box>
    </>
  );
};

export default SelectTypeOne;
