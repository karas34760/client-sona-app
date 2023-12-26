import { useTranslation } from 'next-i18next';
import React from 'react';

import SearchContext from '../SearchContext';

interface EventSearchProps {
  data: any;
}

export default function EventSearch({ data }: EventSearchProps) {
  const { t } = useTranslation();

  return (
    <>
      {data &&
        React.Children.toArray(
          data.searchEvents.items.map((event: any) => {
            return (
              <SearchContext
                type={t('event')}
                heading={event.name}
                body={`${event.organizer}`}
                avatar={event.image}
                link={`/event/${event.address}`}
              />
            );
          })
        )}
    </>
  );
}
