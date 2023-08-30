import { As, Box, BoxProps, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
interface IProps {
  icon: As;
  title: String;
  content: String;
  sx?: BoxProps;
}
const CardFeature = ({ icon, title, content, sx }: IProps) => {
  return (
    <>
      <Box
        borderRadius="xl"
        px={{ lg: 10, base: 4 }}
        py={{ lg: 14, base: 8 }}
        border="0.063rem solid"
        borderColor="primary.purple.500"
        boxShadow=" 0px 4px 18px 0px rgba(0, 0, 0, 0.25)"
        {...sx}
        role="group"
        transition="linear 0.5s"
        _hover={{
          background: 'primary.purple.500',
        }}
      >
        <HStack
          alignItems="flex-start"
          gap={6}
          flexWrap={{ lg: 'nowrap', base: 'wrap' }}
        >
          <Icon
            as={icon}
            height="3.375rem"
            width="3.375rem"
            color="primary.purple.500"
            _groupHover={{
              color: 'white',
            }}
          />
          <Flex flexDirection="column" gap={4}>
            <Text
              fontSize="1.75rem"
              fontWeight="semibold"
              color="primary.purple.500"
              _groupHover={{
                color: 'white',
              }}
            >
              {title}
            </Text>
            <Text
              _groupHover={{
                color: 'white',
              }}
            >
              {content}
            </Text>
          </Flex>
        </HStack>
      </Box>
    </>
  );
};

export default CardFeature;
