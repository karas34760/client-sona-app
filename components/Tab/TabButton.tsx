import { Button, ButtonProps, Icon, IconProps } from '@chakra-ui/react';
import { NumberParam, StringParam, useQueryParams } from 'use-query-params';
interface IProps {
  title: string;
  isActive: boolean;
  icon?: any;
  params: any;
  sx?: ButtonProps;
  iconStyle?: IconProps;
}
const TabButton = ({
  title,
  isActive,
  icon,
  params,
  sx,
  iconStyle,
}: IProps) => {
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useQueryParams({
    tab: StringParam,
    page: NumberParam,
  });
  return (
    <Button
      isActive={isActive}
      variant="tab"
      leftIcon={
        icon ? (
          <Icon as={icon} height={5} width={5} {...iconStyle} />
        ) : undefined
      }
      key={title}
      onClick={() => {
        setQuery(params);
      }}
      {...sx}
    >
      {title}
    </Button>
  );
};

export default TabButton;
