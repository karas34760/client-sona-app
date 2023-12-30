import { useQuery } from '@apollo/client';

import { SEARCH_EVENTS } from '@/graphql/query';

export default function useSearchResult(query: string) {
  const { data: Event, loading: EventLoading } = useQuery(SEARCH_EVENTS, {
    variables: {
      page: 1,
      size: 10,
      orderBy: {
        TimeForSell: 'asc',
      },
      filter: {
        name: query,
      },
    },
  });

  return {
    Event,
    EventLoading,
  };
}
