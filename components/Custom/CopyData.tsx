import {
  Icon,
  IconButton,
  IconButtonProps,
  Tooltip,
  Text,
  useClipboard,
} from '@chakra-ui/react';
import React from 'react';

import CheckIcon from 'public/assets/icons/generals/check.svg';
import CopyIcon from 'public/assets/icons/generals/copy.svg';
interface CopyClipProps {
  context: string;
}
const CopyData = ({
  context,
  w,
  h,
  ...rest
}: IconButtonProps & CopyClipProps) => {
  const { onCopy, hasCopied } = useClipboard(context);
  return (
    <>
      <Tooltip
        label={
          <>
            <Text>{hasCopied ? 'Copied' : 'Copy'}</Text>
          </>
        }
        bg="white"
        color="primary.gray.800"
        placement="right"
        fontSize="sm"
      >
        <IconButton
          variant="unstyled"
          minWidth="unset"
          height="auto"
          color={hasCopied ? 'secondary.success.300' : 'primary.gray.500'}
          cursor="pointer"
          onClick={e => {
            e.preventDefault();
            onCopy();
          }}
          icon={
            <Icon
              w={w || 6}
              h={h || 6}
              as={hasCopied ? CheckIcon : CopyIcon}
              verticalAlign="middle"
            />
          }
          {...rest}
        />
      </Tooltip>
    </>
  );
};

export default CopyData;
