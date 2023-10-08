import {
  Icon,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  As,
  IconProps,
  PopoverProps,
} from '@chakra-ui/react';
import React from 'react';

interface IProps {
  icon: As;
  children: React.ReactNode;
  pop_style?: PopoverProps;
  icon_style?: IconProps;
}
const CustomToolTip = ({
  icon,
  children,
  pop_style,
  icon_style,
  ...rest
}: IProps) => {
  return (
    <>
      <Popover
        variant="primary"
        trigger="hover"
        arrowShadowColor="white"
        arrowPadding={4}
        arrowSize={12}
        {...pop_style}
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

        <PopoverContent {...rest}>
          <PopoverArrow bg="white" />
          {children}
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CustomToolTip;
