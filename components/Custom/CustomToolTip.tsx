import {
  Icon,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  As,
  IconProps,
} from '@chakra-ui/react';
import React from 'react';

interface IProps {
  icon: As;
  children: React.ReactNode;
  icon_style?: IconProps;
}
const CustomToolTip = ({ icon, children, icon_style, ...rest }: IProps) => {
  return (
    <>
      <Popover
        trigger="hover"
        arrowShadowColor="white"
        arrowPadding={4}
        arrowSize={12}
      >
        <PopoverTrigger>
          <IconButton
            variant="unstyled"
            display="flex"
            alignItems="center"
            aria-label="Tickifi Info-Btn"
            icon={
              <Icon
                as={icon}
                height={5}
                width={5}
                cursor="pointer"
                {...icon_style}
              />
            }
          />
        </PopoverTrigger>

        <PopoverContent
          fontWeight="bold"
          bg="white"
          overflowWrap="break-word"
          maxWidth="200px"
          boxShadow="rgba(0, 0, 0, 0.2) 0px 6px 32px"
          bgColor="rgb(255, 255, 255)"
          border="none"
          borderRadius="lg"
          py={2}
          px={4}
          textAlign="center"
          {...rest}
        >
          <PopoverArrow bg="white" />
          {children}
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CustomToolTip;
