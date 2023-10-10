import { Button, ButtonProps, Icon } from '@chakra-ui/react';
import { NumberParam, StringParam, useQueryParams } from 'use-query-params';
interface IProps {
  title: string;
  isActive: boolean;
  icon?: any;
  params: any;
  sx?: ButtonProps;
}
const TabButton = ({ title, isActive, icon, params, sx }: IProps) => {
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useQueryParams({
    tab: StringParam,
    page: NumberParam,
  });
  return (
    <Button
      isActive={isActive}
      variant="tab"
      leftIcon={icon ? <Icon boxSize="1rem" as={icon} /> : undefined}
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
