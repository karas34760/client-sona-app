import { Button, Icon } from '@chakra-ui/react';
import { NumberParam, StringParam, useQueryParams } from 'use-query-params';
const TabButton = ({
  title,
  isActive,
  icon,
  params,
}: {
  title: string;
  isActive: boolean;
  icon?: any;
  params: any;
}) => {
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
    >
      {title}
    </Button>
  );
};

export default TabButton;
