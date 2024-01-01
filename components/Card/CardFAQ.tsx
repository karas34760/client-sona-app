import {
  Box,
  Card,
  CardHeader,
  Collapse,
  Icon,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import ArrowIcon from 'public/assets/icons/arrow/down.svg';
interface IProps {
  title: string;
  content: any; //todo should change type to component
}
const CardFAQ = ({ title, content }: IProps) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Card>
      <CardHeader
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="lg" fontWeight="bold" textTransform="capitalize">
          {title}
        </Text>
        <IconButton
          onClick={onToggle}
          icon={
            <Icon
              as={ArrowIcon}
              transform={isOpen ? 'rotate(180deg)' : undefined}
            />
          }
          aria-label={''}
        />
      </CardHeader>

      <Collapse in={isOpen} animateOpacity>
        <Box paddingX={6} pt={2} pb={6}>
          {content}
        </Box>
      </Collapse>
    </Card>
  );
};

export default CardFAQ;
