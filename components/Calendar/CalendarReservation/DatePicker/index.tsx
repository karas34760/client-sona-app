/* eslint-disable no-unused-vars */
import {
  IconButton,
  StyleObjectOrFn,
  Text,
  useTheme,
  css as chakraCSS,
  HStack,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { ClassNames } from '@emotion/react';
import React, { FC, useCallback, useMemo } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';

import ArrowIcon from 'public/assets/icons/arrow/down.svg';

const CustomHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: any) => {
  return (
    <HStack pb={1} alignItems="center" textAlign="center" pl={4} pr={2}>
      <IconButton
        borderRadius="full"
        size="sm"
        variant="ghost"
        aria-label="Previous Month"
        icon={
          <Icon height={5} width={5} as={ArrowIcon} transform="rotate(90deg)" />
        }
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
      />
      <Text color="gray.700" flex={1} fontSize="sm" fontWeight="bold">
        {new Intl.DateTimeFormat('en-AU', {
          year: 'numeric',
          month: 'long',
        }).format(date)}
      </Text>
      <IconButton
        borderRadius="full"
        size="sm"
        variant="ghost"
        aria-label="Next Month"
        icon={
          <Icon
            as={ArrowIcon}
            height={5}
            width={5}
            transform="rotate(-90deg)"
          />
        }
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
      />
    </HStack>
  );
};

function useDatePickerStyles() {
  const theme = useTheme();
  const bgReactWrapper = useColorModeValue('white', 'inherit');
  const colorDay = useColorModeValue('primary.gray.700', 'white');
  return useMemo(() => {
    const defaultStyles: StyleObjectOrFn = {
      backgroundColor: `${bgReactWrapper}!important`,

      border: 'none',

      '& .react-datepicker': {
        '&__header': {
          bg: 'none',
          borderBottom: 'none',
        },
        '&__month': {
          mt: 0,
        },
        '&__day--outside-month': {
          visibility: 'hidden',
        },
        '&__day-name': {
          color: 'gray.400',
          fontWeight: 'medium',

          width: 8,
        },

        '&__day': {
          lineHeight: '32px',
          fontSize: 'lg',
          fontWeight: 'bold',
          color: colorDay,
          w: 8,
          h: 8,
          borderRadius: 'full',
        },
        '&__week .react-datepicker__day:nth-child(1)': {
          color: 'secondary.danger.200',
        },
        '&__day:not(.react-datepicker__day--selected, .react-datepicker__day--keyboard-selected):hover':
          {
            bg: 'white',
            boxShadow: '0 0 1px 1px rgba(0,0,0,0.2)',
          },
        '&__day--today': {
          bg: 'primary.gray.300',
          fontWeight: '400',
        },
        '&__day--selected, &__day--keyboard-selected': {
          bg: 'primary.purple.500',
          color: 'white!important',
        },
      },
    };
    return chakraCSS(defaultStyles)(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bgReactWrapper, theme]);
}

export interface DatePickerProps {
  value: Date;
  onChange: (date: Date | null) => void;
}

export const DatePicker: FC<DatePickerProps> = ({ value, onChange }) => {
  const styles = useDatePickerStyles();

  const render = useCallback(
    ({ css }: any) => {
      return (
        <ReactDatePicker
          dateFormat="dd MMMM, yyy"
          showPopperArrow={false}
          inline
          wrapperClassName="karas_react_date_picker"
          /* popperClassName={css({ marginTop: '4px!important' })} */
          calendarClassName={css(styles)}
          onChange={date =>
            Array.isArray(date) ? onChange(date[0]) : onChange(date)
          }
          /*   renderCustomHeader={CustomHeader} */
        />
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [styles, value]
  );

  return <ClassNames>{render}</ClassNames>;
};
