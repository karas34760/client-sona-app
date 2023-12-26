import { Box } from '@chakra-ui/react';

import UltraSearchNotFound from './SearchNotFound';
import EventSearch from './TypeSearch/EventSearch';

interface UltraSearchResultProps {
  val: string;
  Event: any;
}

export default function SearchResult({ val, Event }: UltraSearchResultProps) {
  return (
    <>
      <Box
        sx={{
          '> div': {
            ':not(:first-of-type)': {
              borderTop: '0.0625rem solid',
              borderColor: 'primary.gray.400',
            },
            padding: 6,
          },
        }}
      >
        <>
          <EventSearch data={Event} />

          <UltraSearchNotFound query={val} />
        </>
      </Box>
    </>
  );
}
