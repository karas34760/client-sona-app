import {
  useStyleConfig,
  Card as ChakraCard,
  CardProps,
} from '@chakra-ui/react';

// type CardProps = BoxProps & {
//   variant?: string | object;
// };

export default function CardBox(props: CardProps) {
  // eslint-disable-next-line no-unused-vars
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig('CardBox', { variant });
  return (
    <ChakraCard height="fit-content" {...rest} __css={styles}>
      {props.children}
    </ChakraCard>
  );
}
