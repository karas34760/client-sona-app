import { TagLeftIcon } from '@chakra-ui/react';
import {
  GroupBase,
  SelectComponentsConfig,
  chakraComponents,
} from 'chakra-react-select';

import { ReportDataProps } from '@/layouts/Account/UsedComponents/ReportModal';

export const CustomOption: SelectComponentsConfig<
  ReportDataProps,
  true,
  GroupBase<ReportDataProps>
> = {
  Option: ({ children, ...props }) => (
    <chakraComponents.Option {...props}>{children}</chakraComponents.Option>
  ),
  MultiValueContainer: ({ children, ...props }) => (
    <chakraComponents.MultiValueContainer {...props}>
      <TagLeftIcon as={props.data.Icon} color={props.data.iconColor} />
      {children}
    </chakraComponents.MultiValueContainer>
  ),
};
